export const adminMenu = [
    { //Quản lý người dùng
        name: 'menu.admin.manage_user',
        menus: [
            {
                name: 'menu.admin.crud', link: "/system/user-manage",
            },
            {
                name: 'menu.admin.crud_redux', link: "/system/user-redux",
            },
            {
                name: 'menu.admin.manage_doctor', link: "/system/manage-doctor",
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.manage_admin', link: "/system/user-admin",
            },
        ]
    },
    { //Quản lý Phòng khám
        name: 'menu.admin.clinic',
        menus: [
            {
                name: 'menu.admin.manage_clinic', link: "/system/manage-clinic",
            },
        ]
    },
    { //Quản lý Chuyên khoa
        name: 'menu.admin.specialty',
        menus: [
            {
                name: 'menu.admin.manage_specialty', link: "/system/manage-specialty",
            },
        ]
    },
    { //Quản lý Cẩm nang
        name: 'menu.admin.handbook',
        menus: [
            {
                name: 'menu.admin.manage_handbook', link: "/system/manage-handbook",
            },
        ]
    },
];