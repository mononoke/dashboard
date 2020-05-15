const rootWidth = { // vw
    big: 100,
    middle: 20,
    small: 10
}

// Module side margin
const sideMargin = 15

const parentConfig = {
    root: {
        big: {
            width: rootWidth.big,
            left: 0
        },
        middle: {
            width: rootWidth.middle,
            left: 0
        },
        small: {
            width: rootWidth.small,
            left: 0
        }
    },
    section: {
        big: {
            width: 100 - rootWidth.middle,
            left: rootWidth.middle
        },
        small: {
            width: rootWidth.small,
            left: rootWidth.small
        }
    },
    module: {
        width: 100 - rootWidth.small * 2,
        left: rootWidth.small * 2
    }
}

const hotizontalMargin = {
    big: 40,
    middle: 20,
    small: 20
}

// number of items in a row
const nx = 3

const itemSize = {
    big: {
        height: 200, // px
        widthCoef: 28, // %
    },
    middle: {
        height: 80, // px
        widthCoef: 94 // %
    },
    small: {
        height: 80, // px
        widthCoef: 94 // %
    }
}

const itemTransform = {
    big: {
        left: (index) => {
            let column = (index + nx) % nx
            let sideMargin = (100 - itemSize.big.widthCoef * 3) / 4
            return sideMargin + (sideMargin + itemSize.big.widthCoef) * column
        },
        top: (index) => {
            let row = Math.floor(index / nx)
            return hotizontalMargin.big + (hotizontalMargin.big + itemSize.big.height) * row
        }
    },
    middle: {
        left: () => {
            return (100 - itemSize.middle.widthCoef) / 2 // %
        },
        top: (index) => {
            return (hotizontalMargin.middle + itemSize.middle.height) * index + hotizontalMargin.middle
        }
    },
    small: {
        // when item is small -> one item in row -> equal side margin
        left: () => {
            return (100 - itemSize.small.widthCoef) / 2 // %
        },
        top: (index) => {
            return (hotizontalMargin.small + itemSize.small.height) * index + hotizontalMargin.small
        }
    }
}

const itemConfig = {
    big: {...itemSize.big, ...itemTransform.big},
    middle: {...itemSize.middle, ...itemTransform.middle},
    small: {...itemSize.small, ...itemTransform.small}
}

class DashboardItem {
    constructor(name, title, description, parent, component, subComponent, requiredRole) {
        this.name = name
        this.title = title
        this.description = description
        this.parent = parent
        this.component = component
        this.subComponent = subComponent
        this.requiredRole = requiredRole
    }
}

export default {
    sideMargin,
    parentConfig,
    itemConfig,
    DashboardItem
}
