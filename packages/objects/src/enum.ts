export const makeEnumResolver =
    <T extends string>(record: Record<string, T>, fallback: T) =>
    (value: string) => {
        const resolver = new Map(
            Object.values(record).map((item) => [item.toString(), item])
        )

        return resolver.get(value) || fallback
    }
