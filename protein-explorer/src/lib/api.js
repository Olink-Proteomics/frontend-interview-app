export const fetchProteins = async () => {
    return new Promise((resolve) => setTimeout(() => resolve(['Protein 1', 'Protein 2']), 2000))
}