print() {
    printf "$1\n\n"
}

printUsage(){
    print "Usage: ./scripts/create-package.sh <package-name>"
}

fail() {
    print "❌ Incorrect usage: $1"
    printUsage
}

if [[ -z "$1" ]]; then
    fail "Missing <package-name>"
    exit 1
fi

pkgName=$1

rootDir=$(git rev-parse --show-toplevel)

cd "$rootDir"

pkgPath="$rootDir/packages/$pkgName"

if [[ -d "$pkgPath" ]]; then
    fail "Package Already Exists"
    exit 2
fi;

cp -R "$rootDir/config/pkg-template" "$pkgPath"

cd "$pkgPath"

touch "src/$pkgName.test.ts"

echo -n "console.debug('hello-world')" > "src/$pkgName.ts"

echo -n "export * from './${pkgName}'" > "src/index.ts"

jq --arg pkgName "$pkgName" '.name = "@pro-functional/\($pkgName)"' package.json > package.tmp.json
mv package.tmp.json package.json

jq '.private = false' package.json > package.tmp.json
mv package.tmp.json package.json

jq --arg repoDir "packages/$pkgName" '.repository.directory = "\($repoDir)"' package.json > package.tmp.json
mv package.tmp.json package.json

cd "$rootDir"

yarn prettier "$pkgPath" --write

yarn install

print "✅ package created: $pkgPath"

