import { House, Files, Document, Picture, Notebook, Setting } from '@element-plus/icons-vue'
export const navLinks = [
    {
        path: 'overview',
        name: 'Overview',
        icon: House
    },
    {
        path: 'files',
        name: 'Files',
        icon: Files
    },
    {
        path: 'articles',
        name: 'Articles',
        icon: Document
    },
    {
        path: 'gallery',
        name: 'Gallery',
        icon: Picture
    },
    {
        path: 'dairies',
        name: 'Diaries',
        icon: Notebook
    },
    {
        path: 'settings',
        name: 'Settings',
        icon: Setting
    },
]

export const overLink = [{
    path: '',
    name: 'Files',
    total: "0M",
    bgColor: 'var(--el-color-primary-light-7)',
},{
    path: 'create_article',
    name: 'Articles',
    total: 0,
    bgColor: 'var(--el-color-success-light-7)',
},{
    path: 'create_image',
    name: 'Images',
    total: 0,
    bgColor: 'var(--el-color-warning-light-7)',
},
{
    path: 'create_diary',
    name: 'Diaries',
    total: 0,
    bgColor: 'var(--el-color-danger-light-7)',
}]