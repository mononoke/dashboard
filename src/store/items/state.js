import model from './model'

const DashboardItem = model.DashboardItem

let dashItems = [
    new DashboardItem("software-development", "Software development", '', 'root', undefined, undefined, ''),
    new DashboardItem("books", "Books", '', 'root', undefined, undefined, ''),
    new DashboardItem("climbing", "Climbing", '', 'root', undefined, undefined, ''),

    new DashboardItem("frontend", "Frontend", '', 'software-development', 'Frontend', 'Tab', ''),
    new DashboardItem("backend", "Backend", '', 'software-development', 'Backend', 'Tab', ''),

    new DashboardItem("sci-fi", "Sci-fi", '', 'books', 'Genre', 'Book', ''),
    new DashboardItem("philosophy", "Philosophy", '', 'books', 'Genre', 'Book', ''),
    new DashboardItem("detective", "Detective", '', 'books', 'Genre', 'Book', ''),
    new DashboardItem("dystopia", "Dystopia", '', 'books', 'Genre', 'Book',''),

    new DashboardItem("kazbek", "Kazbek", 'Mount Kazbegi is a dormant stratovolcano and one of the major mountains of the Caucasus located on the border of Georgia\'s Kazbegi District and Russian Republic of North Ossetia–Alania.', 'climbing', 'Mount', '', ''),
]

export default {
    dashItems,

    // role === 'root'
    rootConfiguration: {
        routerTransitionName: "transitionRoot",
        keyRouterView: "root",
        parentConfig: model.parentConfig.root.big,
        itemConfig: model.itemConfig.small
    },

    // role === 'section'
    sectionConfiguration: {
        routerTransitionName: "transitionSection",
        keyRouterView: "section",
        parentConfig: model.parentConfig.section.big,
        itemConfig: model.itemConfig.small
    },
    setParentConfig: (role, size) => {
        return model.parentConfig[role][size]
    },
    setItemConfig: (size) => {
        return model.itemConfig[size]
    },
    navState: "initial"
}
