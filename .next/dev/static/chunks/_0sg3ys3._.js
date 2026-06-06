(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Sidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ROLE_NAV = {
    super_admin: [
        {
            label: 'Dashboard',
            icon: 'ti-layout-dashboard',
            path: '/dashboard'
        },
        {
            label: 'Users',
            icon: 'ti-users',
            path: '/admin/users'
        },
        {
            label: 'Locations',
            icon: 'ti-map-pin',
            path: '/admin/locations'
        },
        {
            label: 'Customers / HCPs',
            icon: 'ti-stethoscope',
            path: '/admin/customers'
        },
        {
            label: 'Attendance',
            icon: 'ti-calendar-check',
            path: '/attendance'
        },
        {
            label: 'Expenses',
            icon: 'ti-receipt',
            path: '/expenses'
        },
        {
            label: 'Reports',
            icon: 'ti-chart-bar',
            path: '/reports'
        },
        {
            label: 'Notifications',
            icon: 'ti-bell',
            path: '/admin/notifications'
        }
    ],
    ceo: [
        {
            label: 'Dashboard',
            icon: 'ti-layout-dashboard',
            path: '/dashboard'
        },
        {
            label: 'Attendance',
            icon: 'ti-calendar-check',
            path: '/attendance'
        },
        {
            label: 'Expenses',
            icon: 'ti-receipt',
            path: '/expenses'
        },
        {
            label: 'Approvals',
            icon: 'ti-checkbox',
            path: '/approvals'
        },
        {
            label: 'Reports',
            icon: 'ti-chart-bar',
            path: '/reports'
        }
    ],
    director: [
        {
            label: 'Dashboard',
            icon: 'ti-layout-dashboard',
            path: '/dashboard'
        },
        {
            label: 'Attendance',
            icon: 'ti-calendar-check',
            path: '/attendance'
        },
        {
            label: 'Expenses',
            icon: 'ti-receipt',
            path: '/expenses'
        },
        {
            label: 'Approvals',
            icon: 'ti-checkbox',
            path: '/approvals'
        },
        {
            label: 'Reports',
            icon: 'ti-chart-bar',
            path: '/reports'
        }
    ],
    manager: [
        {
            label: 'Dashboard',
            icon: 'ti-layout-dashboard',
            path: '/dashboard'
        },
        {
            label: 'Attendance',
            icon: 'ti-calendar-check',
            path: '/attendance'
        },
        {
            label: 'Expenses',
            icon: 'ti-receipt',
            path: '/expenses'
        },
        {
            label: 'Approvals',
            icon: 'ti-checkbox',
            path: '/approvals'
        },
        {
            label: 'Leave Approvals',
            icon: 'ti-calendar-time',
            path: '/leaves'
        },
        {
            label: 'Reports',
            icon: 'ti-chart-bar',
            path: '/reports'
        }
    ],
    field_staff: [
        {
            label: 'Dashboard',
            icon: 'ti-layout-dashboard',
            path: '/dashboard'
        },
        {
            label: 'Attendance',
            icon: 'ti-calendar-check',
            path: '/attendance'
        },
        {
            label: 'Expenses',
            icon: 'ti-receipt',
            path: '/expenses'
        },
        {
            label: 'My Leaves',
            icon: 'ti-calendar-time',
            path: '/leaves'
        },
        {
            label: 'My Reports',
            icon: 'ti-chart-bar',
            path: '/reports'
        }
    ],
    accountant: [
        {
            label: 'Dashboard',
            icon: 'ti-layout-dashboard',
            path: '/dashboard'
        },
        {
            label: 'Expense Approvals',
            icon: 'ti-receipt',
            path: '/expenses'
        },
        {
            label: 'Leave Reports',
            icon: 'ti-calendar-time',
            path: '/leaves'
        },
        {
            label: 'Reports',
            icon: 'ti-chart-bar',
            path: '/reports'
        }
    ]
};
function Sidebar({ open, onClose }) {
    _s();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!user) return null;
    const navItems = ROLE_NAV[user.role] || [];
    const initials = user.name.split(' ').map((w)=>w[0]).join('').slice(0, 2).toUpperCase();
    const handleNav = (path)=>{
        router.push(path);
        if (onClose) onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-sidebar-overlay",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 70,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `sidebar ${open ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-logo",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 36,
                                    height: 36,
                                    background: 'var(--fe-amber-200)',
                                    borderRadius: 8,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ti ti-map-pin",
                                    style: {
                                        fontSize: 18,
                                        color: 'var(--fe-amber-800)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 15,
                                            fontWeight: 700,
                                            color: 'white',
                                            letterSpacing: '-0.3px'
                                        },
                                        children: "FieldEdge"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            color: 'rgba(255,255,255,0.45)',
                                            letterSpacing: '0.05em'
                                        },
                                        children: "PHARMA FIELD FORCE"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "sidebar-nav",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `sidebar-item ${pathname === item.path || pathname.startsWith(item.path + '/') ? 'active' : ''}`,
                                onClick: ()=>handleNav(item.path),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `ti ${item.icon} icon`
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.path, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '16px 20px',
                            borderTop: '1px solid rgba(255,255,255,0.08)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 36,
                                            height: 36,
                                            background: 'var(--fe-teal-400)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: 'white',
                                            flexShrink: 0
                                        },
                                        children: initials
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 13,
                                                    fontWeight: 500,
                                                    color: 'white',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                },
                                                children: user.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sidebar.js",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    color: 'rgba(255,255,255,0.45)'
                                                },
                                                children: [
                                                    user.empId,
                                                    " · ",
                                                    user.title
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Sidebar.js",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    logout();
                                    router.push('/');
                                },
                                style: {
                                    width: '100%',
                                    background: 'rgba(255,255,255,0.07)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    borderRadius: 8,
                                    color: 'rgba(255,255,255,0.7)',
                                    padding: '8px 12px',
                                    cursor: 'pointer',
                                    fontSize: 13,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ti ti-logout"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    " Sign Out"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Sidebar, "TVCmUMOhI9c7KC/d7gLgXSNlw8w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStore",
    ()=>getStore,
    "nextId",
    ()=>nextId
]);
// lib/store.js — In-memory data store (resets on server restart)
// This is intentional for prototype — Vercel serverless functions share state per instance
let store = null;
function initStore() {
    if (store) return store;
    store = {
        users: [
            {
                id: 'u1',
                empId: 'EMP001',
                name: 'Admin User',
                email: 'admin@fieldedge.com',
                password: 'admin123',
                role: 'super_admin',
                title: 'System Administrator',
                managerId: null,
                baseLocation: 'loc1',
                isManager: false,
                active: true
            },
            {
                id: 'u2',
                empId: 'EMP002',
                name: 'Rajesh Kumar',
                email: 'ceo@fieldedge.com',
                password: 'ceo123',
                role: 'ceo',
                title: 'Chief Executive Officer',
                managerId: null,
                baseLocation: 'loc1',
                isManager: true,
                active: true
            },
            {
                id: 'u3',
                empId: 'EMP003',
                name: 'Priya Sharma',
                email: 'director1@fieldedge.com',
                password: 'dir123',
                role: 'director',
                title: 'Business Director - West',
                managerId: 'u2',
                baseLocation: 'loc2',
                isManager: true,
                active: true
            },
            {
                id: 'u4',
                empId: 'EMP004',
                name: 'Amit Patel',
                email: 'director2@fieldedge.com',
                password: 'dir123',
                role: 'director',
                title: 'Business Director - East',
                managerId: 'u2',
                baseLocation: 'loc3',
                isManager: true,
                active: true
            },
            {
                id: 'u5',
                empId: 'EMP005',
                name: 'Sneha Joshi',
                email: 'manager1@fieldedge.com',
                password: 'mgr123',
                role: 'manager',
                title: 'Territory Manager - Mumbai',
                managerId: 'u3',
                baseLocation: 'loc2',
                isManager: true,
                active: true
            },
            {
                id: 'u6',
                empId: 'EMP006',
                name: 'Vikram Singh',
                email: 'manager2@fieldedge.com',
                password: 'mgr123',
                role: 'manager',
                title: 'Territory Manager - Pune',
                managerId: 'u3',
                baseLocation: 'loc4',
                isManager: true,
                active: true
            },
            {
                id: 'u7',
                empId: 'EMP007',
                name: 'Ananya Das',
                email: 'staff1@fieldedge.com',
                password: 'staff123',
                role: 'field_staff',
                title: 'Medical Representative',
                managerId: 'u5',
                baseLocation: 'loc2',
                isManager: false,
                active: true
            },
            {
                id: 'u8',
                empId: 'EMP008',
                name: 'Rohit Verma',
                email: 'staff2@fieldedge.com',
                password: 'staff123',
                role: 'field_staff',
                title: 'Senior Medical Representative',
                managerId: 'u5',
                baseLocation: 'loc2',
                isManager: false,
                active: true
            },
            {
                id: 'u9',
                empId: 'EMP009',
                name: 'Kavya Nair',
                email: 'staff3@fieldedge.com',
                password: 'staff123',
                role: 'field_staff',
                title: 'Medical Representative',
                managerId: 'u6',
                baseLocation: 'loc4',
                isManager: false,
                active: true
            },
            {
                id: 'u10',
                empId: 'EMP010',
                name: 'Suresh Rao',
                email: 'accountant@fieldedge.com',
                password: 'acc123',
                role: 'accountant',
                title: 'Senior Accountant',
                managerId: null,
                baseLocation: 'loc1',
                isManager: false,
                active: true
            }
        ],
        locations: [
            {
                id: 'loc1',
                name: 'Head Office - Mumbai',
                city: 'Mumbai',
                state: 'Maharashtra'
            },
            {
                id: 'loc2',
                name: 'Mumbai West Zone',
                city: 'Mumbai',
                state: 'Maharashtra'
            },
            {
                id: 'loc3',
                name: 'Kolkata Region',
                city: 'Kolkata',
                state: 'West Bengal'
            },
            {
                id: 'loc4',
                name: 'Pune Zone',
                city: 'Pune',
                state: 'Maharashtra'
            },
            {
                id: 'loc5',
                name: 'Delhi NCR',
                city: 'Delhi',
                state: 'Delhi'
            },
            {
                id: 'loc6',
                name: 'Bangalore Zone',
                city: 'Bangalore',
                state: 'Karnataka'
            }
        ],
        customers: [
            {
                id: 'c1',
                name: 'Dr. Meera Iyer',
                type: 'HCP',
                specialty: 'Cardiologist',
                location: 'loc2',
                clinic: 'Iyer Heart Clinic'
            },
            {
                id: 'c2',
                name: 'Dr. Sanjay Gupta',
                type: 'HCP',
                specialty: 'Diabetologist',
                location: 'loc2',
                clinic: 'Gupta Diabetes Centre'
            },
            {
                id: 'c3',
                name: 'Apollo Pharmacy - Andheri',
                type: 'Chemist',
                specialty: 'Retail Pharmacy',
                location: 'loc2',
                clinic: ''
            },
            {
                id: 'c4',
                name: 'Dr. Lakshmi Bhat',
                type: 'HCP',
                specialty: 'General Physician',
                location: 'loc4',
                clinic: 'Bhat Clinic'
            },
            {
                id: 'c5',
                name: 'MedPlus - Pune Camp',
                type: 'Chemist',
                specialty: 'Retail Pharmacy',
                location: 'loc4',
                clinic: ''
            },
            {
                id: 'c6',
                name: 'Dr. Arjun Reddy',
                type: 'HCP',
                specialty: 'Oncologist',
                location: 'loc3',
                clinic: 'Reddy Cancer Institute'
            },
            {
                id: 'c7',
                name: 'Sahyadri Hospital Pharmacy',
                type: 'Hospital',
                specialty: 'Hospital Pharmacy',
                location: 'loc4',
                clinic: ''
            },
            {
                id: 'c8',
                name: 'Dr. Fatima Sheikh',
                type: 'HCP',
                specialty: 'Neurologist',
                location: 'loc2',
                clinic: 'Neuro Care Centre'
            }
        ],
        attendance: [
            {
                id: 'att1',
                userId: 'u7',
                date: getTodayStr(),
                type: 'present',
                locationId: 'loc2',
                customerIds: [
                    'c1',
                    'c2'
                ],
                comments: 'Morning visits completed. Dr. Iyer showed interest in Cardivaz-5.',
                lat: 19.076,
                lng: 72.877,
                createdAt: new Date().toISOString()
            },
            {
                id: 'att2',
                userId: 'u8',
                date: getTodayStr(),
                type: 'present',
                locationId: 'loc2',
                customerIds: [
                    'c3',
                    'c8'
                ],
                comments: 'Chemist visit + follow-up with Dr. Fatima.',
                lat: null,
                lng: null,
                createdAt: new Date().toISOString()
            }
        ],
        expenses: [
            {
                id: 'exp1',
                userId: 'u7',
                date: getDateStr(-3),
                title: 'HCP Visit - Travel',
                description: 'Auto-rickshaw fare for Dr. Iyer clinic visit and Apollo Pharmacy',
                amount: 450,
                image: null,
                status: 'pending_manager',
                managerId: 'u5',
                managerApprovedAt: null,
                accountantApprovedAt: null,
                rejectedAt: null,
                rejectedBy: null,
                rejectionReason: null,
                createdAt: getDateStr(-3)
            },
            {
                id: 'exp2',
                userId: 'u8',
                date: getDateStr(-5),
                title: 'Product Samples Delivery',
                description: 'Courier charges for sending product samples to Dr. Fatima',
                amount: 320,
                image: null,
                status: 'manager_approved',
                managerId: 'u5',
                managerApprovedAt: getDateStr(-4),
                accountantApprovedAt: null,
                rejectedAt: null,
                rejectedBy: null,
                rejectionReason: null,
                createdAt: getDateStr(-5)
            },
            {
                id: 'exp3',
                userId: 'u9',
                date: getDateStr(-2),
                title: 'CME Sponsorship',
                description: 'Contribution to CME event at Sahyadri Hospital',
                amount: 5000,
                image: null,
                status: 'pending_manager',
                managerId: 'u6',
                managerApprovedAt: null,
                accountantApprovedAt: null,
                rejectedAt: null,
                rejectedBy: null,
                rejectionReason: null,
                createdAt: getDateStr(-2)
            },
            {
                id: 'exp4',
                userId: 'u5',
                date: getDateStr(-7),
                title: 'Team Meeting Lunch',
                description: 'Lunch for team meeting at Mumbai office',
                amount: 2800,
                image: null,
                status: 'pending_director',
                managerId: 'u3',
                managerApprovedAt: null,
                accountantApprovedAt: null,
                rejectedAt: null,
                rejectedBy: null,
                rejectionReason: null,
                createdAt: getDateStr(-7)
            },
            {
                id: 'exp5',
                userId: 'u7',
                date: getDateStr(-10),
                title: 'Mobile Recharge',
                description: 'Official mobile recharge for field communications',
                amount: 699,
                image: null,
                status: 'approved',
                managerId: 'u5',
                managerApprovedAt: getDateStr(-9),
                accountantApprovedAt: getDateStr(-8),
                rejectedAt: null,
                rejectedBy: null,
                rejectionReason: null,
                createdAt: getDateStr(-10)
            }
        ],
        leaves: [
            {
                id: 'lv1',
                userId: 'u9',
                managerId: 'u6',
                fromDate: getDateStr(2),
                toDate: getDateStr(3),
                reason: 'Personal medical appointment',
                status: 'pending',
                approvedAt: null,
                rejectedAt: null,
                createdAt: getDateStr(-1)
            },
            {
                id: 'lv2',
                userId: 'u7',
                managerId: 'u5',
                fromDate: getDateStr(-15),
                toDate: getDateStr(-14),
                reason: 'Family function',
                status: 'approved',
                approvedAt: getDateStr(-16),
                rejectedAt: null,
                createdAt: getDateStr(-17)
            }
        ],
        notifications: [],
        nextId: 1000
    };
    return store;
}
function getTodayStr() {
    return new Date().toISOString().split('T')[0];
}
function getDateStr(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
}
function getStore() {
    return initStore();
}
function nextId(prefix = 'id') {
    const s = initStore();
    s.nextId++;
    return `${prefix}${s.nextId}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/auth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ROLES",
    ()=>ROLES,
    "ROLE_LABELS",
    ()=>ROLE_LABELS,
    "authenticate",
    ()=>authenticate,
    "getDirectReports",
    ()=>getDirectReports,
    "getManager",
    ()=>getManager,
    "getSpan",
    ()=>getSpan,
    "getUserById",
    ()=>getUserById
]);
// lib/auth.js
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.js [app-client] (ecmascript)");
;
const ROLES = {
    SUPER_ADMIN: 'super_admin',
    CEO: 'ceo',
    DIRECTOR: 'director',
    MANAGER: 'manager',
    FIELD_STAFF: 'field_staff',
    ACCOUNTANT: 'accountant'
};
const ROLE_LABELS = {
    super_admin: 'Super Admin',
    ceo: 'CEO',
    director: 'Director',
    manager: 'Manager',
    field_staff: 'Field Staff',
    accountant: 'Accountant'
};
function authenticate(email, password) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])();
    const user = store.users.find((u)=>u.email.toLowerCase() === email.toLowerCase() && u.password === password && u.active);
    if (!user) return null;
    const { password: _, ...safeUser } = user;
    return safeUser;
}
function getUserById(id) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])();
    const user = store.users.find((u)=>u.id === id);
    if (!user) return null;
    const { password: _, ...safeUser } = user;
    return safeUser;
}
function getDirectReports(managerId) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])();
    return store.users.filter((u)=>u.managerId === managerId && u.active).map(({ password: _, ...u })=>u);
}
function getSpan(userId, visited = new Set()) {
    if (visited.has(userId)) return [];
    visited.add(userId);
    const directs = getDirectReports(userId);
    const all = [
        ...directs
    ];
    for (const d of directs){
        all.push(...getSpan(d.id, visited));
    }
    return all;
}
function getManager(userId) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStore"])();
    const user = store.users.find((u)=>u.id === userId);
    if (!user || !user.managerId) return null;
    return getUserById(user.managerId);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AppShell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AppShell({ children }) {
    _s();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: sidebarOpen,
                onClose: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/AppShell.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "main-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "topbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSidebarOpen(true),
                                        style: {
                                            display: 'none',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: 4
                                        },
                                        className: "mobile-menu-btn",
                                        "aria-label": "Open menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ti ti-menu-2",
                                            style: {
                                                fontSize: 22,
                                                color: 'var(--fe-gray-600)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/AppShell.js",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/AppShell.js",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            color: 'var(--fe-gray-400)'
                                        },
                                        children: new Date().toLocaleDateString('en-IN', {
                                            weekday: 'short',
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/AppShell.js",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AppShell.js",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 12,
                                        padding: '3px 10px',
                                        borderRadius: 20,
                                        background: 'var(--fe-teal-50)',
                                        color: 'var(--fe-teal-600)',
                                        border: '0.5px solid var(--fe-teal-100)'
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLE_LABELS"][user.role] || user.role
                                }, void 0, false, {
                                    fileName: "[project]/components/AppShell.js",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AppShell.js",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AppShell.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "page-content",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/AppShell.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AppShell.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/AppShell.js",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AppShell.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(AppShell, "gG4SLcsV0Teswin+ZEVc96GA0hk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/reports/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/ToastContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppShell.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ReportsPage() {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const today = new Date().toISOString().split('T')[0];
    const firstOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('attendance');
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(firstOfMonth);
    const [to, setTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(today);
    const [attendance, setAttendance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [leaves, setLeaves] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingData, setLoadingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isTeam = [
        'ceo',
        'director',
        'manager',
        'super_admin',
        'accountant'
    ].includes(user?.role);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportsPage.useEffect": ()=>{
            if (!loading && !user) {
                router.push('/');
                return;
            }
            if (user) loadAll();
        }
    }["ReportsPage.useEffect"], [
        user,
        loading
    ]);
    const loadAll = async ()=>{
        setLoadingData(true);
        const span = isTeam ? `forSpan=${user.id}` : `userId=${user.id}`;
        try {
            const [attRes, expRes, lvRes] = await Promise.all([
                fetch(`/api/attendance?${span}&from=${from}&to=${to}`),
                fetch(`/api/expenses?${span}&from=${from}&to=${to}`),
                fetch(`/api/leaves?${isTeam ? `forSpan=${user.id}` : `userId=${user.id}`}`)
            ]);
            const [attData, expData, lvData] = await Promise.all([
                attRes.json(),
                expRes.json(),
                lvRes.json()
            ]);
            setAttendance(attData.attendance || []);
            setExpenses(expData.expenses || []);
            setLeaves(lvData.leaves || []);
        } finally{
            setLoadingData(false);
        }
    };
    const exportCSV = async (type)=>{
        const span = isTeam ? `forSpan=${user.id}` : `userId=${user.id}`;
        const res = await fetch(`/api/reports?type=${type}&from=${from}&to=${to}&${span}`);
        const data = await res.json();
        if (!data.rows?.length) {
            showToast('No data to export', 'warning');
            return;
        }
        const headers = Object.keys(data.rows[0]);
        const csv = [
            headers.join(','),
            ...data.rows.map((r)=>headers.map((h)=>`"${String(r[h] || '').replace(/"/g, '""')}"`).join(','))
        ].join('\n');
        const blob = new Blob([
            csv
        ], {
            type: 'text/csv'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = data.filename || `${type}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Export downloaded', 'success');
    };
    if (loading || !user) return null;
    const totalExpAmount = expenses.reduce((s, e)=>s + (e.amount || 0), 0);
    const approvedExp = expenses.filter((e)=>e.status === 'approved').reduce((s, e)=>s + (e.amount || 0), 0);
    const presentDays = attendance.filter((a)=>a.userId === user.id && a.type === 'present').length;
    const leaveDays = leaves.filter((l)=>l.userId === user.id && l.status === 'approved').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 12,
                    marginBottom: 4
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "page-title",
                            children: "Reports"
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.js",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "page-sub",
                            children: "Field activity analytics and data export"
                        }, void 0, false, {
                            fileName: "[project]/app/reports/page.js",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/reports/page.js",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reports/page.js",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fe-card",
                style: {
                    marginBottom: 20
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 12,
                        flexWrap: 'wrap',
                        alignItems: 'flex-end'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "fe-label",
                                    children: "From Date"
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.js",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    className: "fe-input",
                                    style: {
                                        width: 160
                                    },
                                    value: from,
                                    onChange: (e)=>setFrom(e.target.value),
                                    max: to
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.js",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reports/page.js",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "fe-label",
                                    children: "To Date"
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.js",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    className: "fe-input",
                                    style: {
                                        width: 160
                                    },
                                    value: to,
                                    onChange: (e)=>setTo(e.target.value),
                                    min: from,
                                    max: today
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.js",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reports/page.js",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "fe-btn-primary",
                            onClick: loadAll,
                            disabled: loadingData,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ti ti-search"
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.js",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                " ",
                                loadingData ? 'Loading...' : 'Apply Filter'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reports/page.js",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "fe-btn-outline",
                            onClick: ()=>exportCSV(tab),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ti ti-download"
                                }, void 0, false, {
                                    fileName: "[project]/app/reports/page.js",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                " Export ",
                                tab === 'attendance' ? 'Attendance' : tab === 'expenses' ? 'Expenses' : 'Leaves',
                                " CSV"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reports/page.js",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/reports/page.js",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reports/page.js",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stat-grid",
                style: {
                    marginBottom: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                style: {
                                    color: 'var(--fe-teal-600)'
                                },
                                children: isTeam ? attendance.filter((a)=>a.type === 'present').length : presentDays
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-label",
                                children: isTeam ? 'Team Present Days' : 'My Present Days'
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reports/page.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                style: {
                                    color: 'var(--fe-amber-400)'
                                },
                                children: isTeam ? leaves.filter((l)=>l.status === 'approved').length : leaveDays
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-label",
                                children: "Approved Leaves"
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reports/page.js",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                style: {
                                    color: 'var(--fe-teal-400)'
                                },
                                children: [
                                    "₹",
                                    totalExpAmount.toLocaleString('en-IN')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-label",
                                children: "Total Expenses"
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reports/page.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-value",
                                style: {
                                    color: 'var(--fe-green-600)'
                                },
                                children: [
                                    "₹",
                                    approvedExp.toLocaleString('en-IN')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-label",
                                children: "Approved Expenses"
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reports/page.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reports/page.js",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 8,
                    marginBottom: 16
                },
                children: [
                    'attendance',
                    'expenses',
                    'leaves'
                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab(t),
                        style: {
                            padding: '7px 18px',
                            borderRadius: 8,
                            fontSize: 13,
                            fontWeight: 500,
                            cursor: 'pointer',
                            border: tab === t ? 'none' : '1px solid var(--fe-gray-100)',
                            background: tab === t ? 'var(--fe-teal-600)' : 'white',
                            color: tab === t ? 'white' : 'var(--fe-gray-600)',
                            textTransform: 'capitalize'
                        },
                        children: t
                    }, t, false, {
                        fileName: "[project]/app/reports/page.js",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/reports/page.js",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            tab === 'attendance' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fe-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "table-wrap",
                    children: attendance.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "empty-state",
                        children: "No attendance data for selected period"
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.js",
                        lineNumber: 134,
                        columnNumber: 40
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        isTeam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Employee"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 137,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "HCPs Visited"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/reports/page.js",
                                    lineNumber: 136,
                                    columnNumber: 24
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 136,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: attendance.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            isTeam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 500
                                                        },
                                                        children: a.userName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.js",
                                                        lineNumber: 147,
                                                        columnNumber: 38
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: 'var(--fe-gray-400)'
                                                        },
                                                        children: a.userEmpId
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reports/page.js",
                                                        lineNumber: 147,
                                                        columnNumber: 89
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 147,
                                                columnNumber: 34
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: a.date
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 148,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `badge badge-${a.type}`,
                                                    children: a.type === 'present' ? 'Present' : 'Leave'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.js",
                                                    lineNumber: 149,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 149,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: a.locationName || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 150,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontSize: 12
                                                },
                                                children: a.customerNames?.join(', ') || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 151,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontSize: 12,
                                                    color: 'var(--fe-gray-400)',
                                                    maxWidth: 180,
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                },
                                                children: a.comments || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 152,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, a.id, true, {
                                        fileName: "[project]/app/reports/page.js",
                                        lineNumber: 146,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 144,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reports/page.js",
                        lineNumber: 135,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reports/page.js",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reports/page.js",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            tab === 'expenses' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fe-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "table-wrap",
                    children: expenses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "empty-state",
                        children: "No expense data for selected period"
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.js",
                        lineNumber: 165,
                        columnNumber: 38
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        isTeam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Employee"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 168,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Title"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/reports/page.js",
                                    lineNumber: 167,
                                    columnNumber: 24
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 167,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: expenses.map((e)=>{
                                    const STATUS = {
                                        pending_manager: [
                                            'badge-pending',
                                            'Pending Mgr'
                                        ],
                                        pending_director: [
                                            'badge-pending',
                                            'Pending Dir'
                                        ],
                                        manager_approved: [
                                            'badge-mgr-approved',
                                            'Mgr Approved'
                                        ],
                                        approved: [
                                            'badge-approved',
                                            'Approved'
                                        ],
                                        rejected: [
                                            'badge-rejected',
                                            'Rejected'
                                        ]
                                    };
                                    const [cls, lbl] = STATUS[e.status] || [
                                        '',
                                        e.status
                                    ];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            isTeam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 500
                                                    },
                                                    children: e.userName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.js",
                                                    lineNumber: 180,
                                                    columnNumber: 40
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 180,
                                                columnNumber: 36
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: e.date
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 181,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: e.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 182,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontWeight: 500
                                                },
                                                children: [
                                                    "₹",
                                                    e.amount?.toLocaleString('en-IN')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 183,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `badge ${cls}`,
                                                    children: lbl
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.js",
                                                    lineNumber: 184,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 184,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, e.id, true, {
                                        fileName: "[project]/app/reports/page.js",
                                        lineNumber: 179,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 174,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reports/page.js",
                        lineNumber: 166,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reports/page.js",
                    lineNumber: 164,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reports/page.js",
                lineNumber: 163,
                columnNumber: 9
            }, this),
            tab === 'leaves' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fe-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "table-wrap",
                    children: leaves.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "empty-state",
                        children: "No leave data"
                    }, void 0, false, {
                        fileName: "[project]/app/reports/page.js",
                        lineNumber: 198,
                        columnNumber: 36
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        isTeam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Employee"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 201,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "From"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "To"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Days"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 204,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Reason"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 205,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/app/reports/page.js",
                                            lineNumber: 206,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/reports/page.js",
                                    lineNumber: 200,
                                    columnNumber: 24
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 200,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: leaves.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            isTeam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontWeight: 500
                                                },
                                                children: l.userName
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 211,
                                                columnNumber: 34
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: l.fromDate
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 212,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: l.toDate
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 213,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: Math.ceil((new Date(l.toDate) - new Date(l.fromDate)) / 86400000) + 1
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 214,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    fontSize: 12
                                                },
                                                children: l.reason
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 215,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `badge badge-${l.status === 'approved' ? 'approved' : l.status === 'rejected' ? 'rejected' : 'pending'}`,
                                                    children: l.status.charAt(0).toUpperCase() + l.status.slice(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reports/page.js",
                                                    lineNumber: 216,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/reports/page.js",
                                                lineNumber: 216,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, l.id, true, {
                                        fileName: "[project]/app/reports/page.js",
                                        lineNumber: 210,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/reports/page.js",
                                lineNumber: 208,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reports/page.js",
                        lineNumber: 199,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/reports/page.js",
                    lineNumber: 197,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reports/page.js",
                lineNumber: 196,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/reports/page.js",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(ReportsPage, "8hHDPhQAdRZrocTaMOQnC9WGNK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ReportsPage;
var _c;
__turbopack_context__.k.register(_c, "ReportsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0sg3ys3._.js.map