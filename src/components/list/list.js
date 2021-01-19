const list = [
    {
        id: 'users-table', section: 'software-development', module: 'frontend', text: 'Code challenge: users table',
    },
    {
        id: 'tasks', section: 'software-development', module: 'frontend', text: 'Code challenge: tasks',
    },
    {
        id: 'vfor', section: 'software-development', module: 'frontend', text: 'v-for: why we use key',
    },
]

export default function getList(section, module) {
    return list.filter((item) => item.section === section && item.module === module)
}
