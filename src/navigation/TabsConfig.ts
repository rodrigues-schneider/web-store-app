import { FetchType } from '../components/'

export const TabsConfig = [
    {
        route: 'HomeTab',
        label: 'Inicio',
        isSubtab: false,
        fetchType: FetchType.MIXED
    },
    {
        route: 'FemaleTab',
        label: 'Feminino',
        isSubtab: false,
        subTabs: [
            { route: 'FemaleMain', label: 'Todos', fetchType: FetchType.CATEGORY, categories: ["womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"], isSubtab: true },
            { route: 'FemaleBags', label: 'Bolsas', fetchType: FetchType.CATEGORY, categories: ['womens-bags'], isSubtab: true },
            { route: 'FemaleDresses', label: 'Vestidos', fetchType: FetchType.CATEGORY, categories: ['womens-dresses'], isSubtab: true },
            { route: 'FemaleJewellery', label: 'Joalheria', fetchType: FetchType.CATEGORY, categories: ['womens-jewellery'], isSubtab: true },
            { route: 'FemaleShoes', label: 'Sapatos', fetchType: FetchType.CATEGORY, categories: ['womens-shoes'], isSubtab: true },
            { route: 'FemaleWatches', label: 'Relógios', fetchType: FetchType.CATEGORY, categories: ['womens-watches'], isSubtab: true },
        ]
    },
    {
        route: 'MaleTab',
        label: 'Masculino',
        isSubtab: false,
        subTabs: [
            { route: 'MaleMain', label: 'Todos', fetchType: FetchType.CATEGORY, categories: ['mens-watches','mens-shirts','mens-shoes'], isSubtab: true },
            { route: 'MaleWatches', label: 'Relógios', fetchType: FetchType.CATEGORY, categories: ['mens-watches'], isSubtab: true },
            { route: 'MaleShirts', label: 'Camisas', fetchType: FetchType.CATEGORY, categories: ['mens-shirts'], isSubtab: true },
            { route: 'MaleShoes', label: 'Sapatos', fetchType: FetchType.CATEGORY, categories: ['mens-shoes'], isSubtab: true },
        ]
    },
]