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
"[project]/components/MultiSelect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MultiSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function MultiSelect({ options, value = [], onChange, placeholder = 'Select...' }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MultiSelect.useEffect": ()=>{
            function handler(e) {
                if (ref.current && !ref.current.contains(e.target)) setOpen(false);
            }
            document.addEventListener('mousedown', handler);
            return ({
                "MultiSelect.useEffect": ()=>document.removeEventListener('mousedown', handler)
            })["MultiSelect.useEffect"];
        }
    }["MultiSelect.useEffect"], []);
    const filtered = options.filter((o)=>o.label.toLowerCase().includes(search.toLowerCase()));
    const toggle = (id)=>{
        if (value.includes(id)) {
            onChange(value.filter((v)=>v !== id));
        } else {
            onChange([
                ...value,
                id
            ]);
        }
    };
    const selectedLabels = value.map((v)=>options.find((o)=>o.value === v)).filter(Boolean);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "multiselect-container",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "multiselect-tags",
                onClick: ()=>setOpen(!open),
                tabIndex: 0,
                children: [
                    selectedLabels.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 14,
                            color: 'var(--fe-gray-400)'
                        },
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/components/MultiSelect.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    selectedLabels.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tag-chip",
                            children: [
                                o.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        toggle(o.value);
                                    },
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/components/MultiSelect.js",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, o.value, true, {
                            fileName: "[project]/components/MultiSelect.js",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/MultiSelect.js",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "multiselect-dropdown",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '8px 10px',
                            borderBottom: '0.5px solid var(--fe-gray-100)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            autoFocus: true,
                            className: "fe-input",
                            style: {
                                padding: '6px 10px',
                                fontSize: 13
                            },
                            placeholder: "Search...",
                            value: search,
                            onChange: (e)=>setSearch(e.target.value),
                            onClick: (e)=>e.stopPropagation()
                        }, void 0, false, {
                            fileName: "[project]/components/MultiSelect.js",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MultiSelect.js",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '12px',
                            fontSize: 13,
                            color: 'var(--fe-gray-400)',
                            textAlign: 'center'
                        },
                        children: "No results"
                    }, void 0, false, {
                        fileName: "[project]/components/MultiSelect.js",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this),
                    filtered.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `multiselect-option ${value.includes(o.value) ? 'selected' : ''}`,
                            onClick: ()=>toggle(o.value),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 16,
                                        height: 16,
                                        border: `1.5px solid ${value.includes(o.value) ? 'var(--fe-teal-400)' : 'var(--fe-gray-200)'}`,
                                        borderRadius: 4,
                                        background: value.includes(o.value) ? 'var(--fe-teal-400)' : 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    },
                                    children: value.includes(o.value) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ti ti-check",
                                        style: {
                                            fontSize: 11,
                                            color: 'white'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/MultiSelect.js",
                                        lineNumber: 67,
                                        columnNumber: 45
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/MultiSelect.js",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 13
                                            },
                                            children: o.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/MultiSelect.js",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        o.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: 'var(--fe-gray-400)'
                                            },
                                            children: o.sub
                                        }, void 0, false, {
                                            fileName: "[project]/components/MultiSelect.js",
                                            lineNumber: 71,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/MultiSelect.js",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, o.value, true, {
                            fileName: "[project]/components/MultiSelect.js",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/MultiSelect.js",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MultiSelect.js",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(MultiSelect, "emeLgtL493XUJEFzt2t04NgbRwQ=");
_c = MultiSelect;
var _c;
__turbopack_context__.k.register(_c, "MultiSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/attendance/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AttendancePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/ToastContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AppShell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MultiSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MultiSelect.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AttendancePage() {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split('T')[0]);
    const [locationId, setLocationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customerIds, setCustomerIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gpsStatus, setGpsStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle'); // idle | detecting | found | failed
    const [gpsCoords, setGpsCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [todayRecord, setTodayRecord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [leaveForm, setLeaveForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fromDate: '',
        toDate: '',
        reason: ''
    });
    const [showLeaveForm, setShowLeaveForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const today = new Date().toISOString().split('T')[0];
    const isTeamView = [
        'ceo',
        'director',
        'manager',
        'super_admin'
    ].includes(user?.role);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttendancePage.useEffect": ()=>{
            if (!loading && !user) {
                router.push('/');
                return;
            }
            if (user) {
                loadLocations();
                loadCustomers();
                loadHistory();
                tryGPS();
            }
        }
    }["AttendancePage.useEffect"], [
        user,
        loading
    ]);
    const tryGPS = ()=>{
        if (!navigator.geolocation) {
            setGpsStatus('failed');
            return;
        }
        setGpsStatus('detecting');
        navigator.geolocation.getCurrentPosition((pos)=>{
            setGpsCoords({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            });
            setGpsStatus('found');
        }, ()=>setGpsStatus('failed'), {
            timeout: 8000
        });
    };
    const loadLocations = async ()=>{
        const res = await fetch('/api/locations');
        const data = await res.json();
        setLocations(data.locations || []);
        if (data.locations?.length > 0 && user?.baseLocation) {
            const base = data.locations.find((l)=>l.id === user.baseLocation);
            if (base) setLocationId(base.id);
        }
    };
    const loadCustomers = async ()=>{
        const res = await fetch('/api/customers');
        const data = await res.json();
        setCustomers(data.customers || []);
    };
    const loadHistory = async ()=>{
        const url = isTeamView ? `/api/attendance?forSpan=${user.id}` : `/api/attendance?userId=${user.id}`;
        const res = await fetch(url);
        const data = await res.json();
        setHistory(data.attendance || []);
        const tday = (data.attendance || []).find((a)=>a.userId === user.id && a.date === today);
        setTodayRecord(tday || null);
    };
    const markAttendance = async (type)=>{
        if (type === 'present' && !locationId) {
            showToast('Please select a location', 'error');
            return;
        }
        setSubmitting(true);
        try {
            const res = await fetch('/api/attendance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: user.id,
                    date,
                    type,
                    locationId,
                    customerIds,
                    comments,
                    lat: gpsCoords?.lat,
                    lng: gpsCoords?.lng
                })
            });
            const data = await res.json();
            if (!res.ok) {
                showToast(data.error, 'error');
                return;
            }
            showToast(type === 'present' ? 'Attendance marked — Present' : 'Leave marked for today', 'success');
            setComments('');
            setCustomerIds([]);
            loadHistory();
        } catch  {
            showToast('Error marking attendance', 'error');
        } finally{
            setSubmitting(false);
        }
    };
    const submitLeave = async (e)=>{
        e.preventDefault();
        if (!leaveForm.fromDate || !leaveForm.toDate || !leaveForm.reason) {
            showToast('All leave fields are required', 'error');
            return;
        }
        try {
            const res = await fetch('/api/leaves', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: user.id,
                    ...leaveForm
                })
            });
            const data = await res.json();
            if (!res.ok) {
                showToast(data.error, 'error');
                return;
            }
            showToast('Email Sent — Leave request submitted and manager notified', 'success');
            setShowLeaveForm(false);
            setLeaveForm({
                fromDate: '',
                toDate: '',
                reason: ''
            });
        } catch  {
            showToast('Error submitting leave', 'error');
        }
    };
    if (loading || !user) return null;
    const customerOptions = customers.map((c)=>({
            value: c.id,
            label: c.name,
            sub: `${c.type} · ${c.specialty}`
        }));
    const displayHistory = isTeamView ? history.slice(0, 20) : history.filter((a)=>a.userId === user.id).slice(0, 20);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "page-title",
                children: "Attendance"
            }, void 0, false, {
                fileName: "[project]/app/attendance/page.js",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "page-sub",
                children: "Mark your daily field presence and HCP visit log"
            }, void 0, false, {
                fileName: "[project]/app/attendance/page.js",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 20,
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fe-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 15,
                                    fontWeight: 600,
                                    color: 'var(--fe-teal-800)',
                                    marginBottom: 16,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ti ti-calendar-plus"
                                    }, void 0, false, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    " Mark Today's Attendance"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/attendance/page.js",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            todayRecord ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'var(--fe-teal-50)',
                                    border: '1px solid var(--fe-teal-100)',
                                    borderRadius: 10,
                                    padding: 16,
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ti ti-circle-check",
                                        style: {
                                            fontSize: 28,
                                            color: 'var(--fe-teal-600)',
                                            display: 'block',
                                            marginBottom: 8
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 600,
                                            color: 'var(--fe-teal-800)'
                                        },
                                        children: "Already marked for today"
                                    }, void 0, false, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `badge badge-${todayRecord.type}`,
                                        style: {
                                            marginTop: 6
                                        },
                                        children: todayRecord.type === 'present' ? 'Present' : 'Leave'
                                    }, void 0, false, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    todayRecord.locationName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            color: 'var(--fe-gray-400)',
                                            marginTop: 6
                                        },
                                        children: todayRecord.locationName
                                    }, void 0, false, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 148,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/attendance/page.js",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "fe-label",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                className: "fe-input",
                                                value: date,
                                                onChange: (e)=>setDate(e.target.value),
                                                max: today
                                            }, void 0, false, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "fe-label",
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8
                                                },
                                                children: [
                                                    "Location",
                                                    gpsStatus === 'detecting' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: 'var(--fe-amber-400)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "ti ti-loader-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/attendance/page.js",
                                                                lineNumber: 160,
                                                                columnNumber: 110
                                                            }, this),
                                                            " Detecting GPS..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/attendance/page.js",
                                                        lineNumber: 160,
                                                        columnNumber: 49
                                                    }, this),
                                                    gpsStatus === 'found' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: 'var(--fe-green-600)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "ti ti-map-pin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/attendance/page.js",
                                                                lineNumber: 161,
                                                                columnNumber: 106
                                                            }, this),
                                                            " GPS captured"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/attendance/page.js",
                                                        lineNumber: 161,
                                                        columnNumber: 45
                                                    }, this),
                                                    gpsStatus === 'failed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: 'var(--fe-gray-400)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "ti ti-map-pin-off"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/attendance/page.js",
                                                                lineNumber: 162,
                                                                columnNumber: 106
                                                            }, this),
                                                            " No GPS"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/attendance/page.js",
                                                        lineNumber: 162,
                                                        columnNumber: 46
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "fe-select",
                                                value: locationId,
                                                onChange: (e)=>setLocationId(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "-- Select Location --"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/attendance/page.js",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this),
                                                    locations.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: l.id,
                                                            children: l.name
                                                        }, l.id, false, {
                                                            fileName: "[project]/app/attendance/page.js",
                                                            lineNumber: 166,
                                                            columnNumber: 39
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "fe-label",
                                                children: "HCPs / Customers Visited"
                                            }, void 0, false, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MultiSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                options: customerOptions,
                                                value: customerIds,
                                                onChange: setCustomerIds,
                                                placeholder: "Select HCPs and chemists..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "fe-label",
                                                children: "Visit Notes / Comments"
                                            }, void 0, false, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: "fe-input",
                                                style: {
                                                    minHeight: 80,
                                                    resize: 'vertical'
                                                },
                                                placeholder: "e.g. Discussed Cardivaz-5 with Dr. Iyer, interested in samples...",
                                                value: comments,
                                                onChange: (e)=>setComments(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "fe-btn-primary",
                                                onClick: ()=>markAttendance('present'),
                                                disabled: submitting,
                                                style: {
                                                    justifyContent: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "ti ti-check"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/attendance/page.js",
                                                        lineNumber: 193,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Mark Present"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "fe-btn-outline",
                                                onClick: ()=>markAttendance('leave'),
                                                disabled: submitting,
                                                style: {
                                                    justifyContent: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "ti ti-calendar-off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/attendance/page.js",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Mark Leave"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 16,
                                    paddingTop: 16,
                                    borderTop: '0.5px solid var(--fe-gray-100)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "fe-btn-gold fe-btn-sm",
                                    style: {
                                        width: '100%',
                                        justifyContent: 'center'
                                    },
                                    onClick: ()=>setShowLeaveForm(true),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ti ti-calendar-time"
                                        }, void 0, false, {
                                            fileName: "[project]/app/attendance/page.js",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this),
                                        " Apply for Future Leave"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/attendance/page.js",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/attendance/page.js",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/attendance/page.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fe-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-title",
                                style: {
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ti ti-history",
                                        style: {
                                            marginRight: 6,
                                            color: 'var(--fe-teal-400)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    isTeamView ? "Team's Attendance" : 'My Attendance History'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/attendance/page.js",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            displayHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty-state",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "ti ti-calendar",
                                        style: {
                                            fontSize: 32,
                                            display: 'block',
                                            marginBottom: 8
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 216,
                                        columnNumber: 42
                                    }, this),
                                    "No records yet"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/attendance/page.js",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxHeight: 420,
                                    overflowY: 'auto'
                                },
                                children: displayHistory.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '10px 0',
                                            borderBottom: '0.5px solid var(--fe-gray-100)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    isTeamView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontWeight: 500,
                                                            fontSize: 13
                                                        },
                                                        children: a.userName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/attendance/page.js",
                                                        lineNumber: 222,
                                                        columnNumber: 36
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 13,
                                                            color: isTeamView ? 'var(--fe-gray-400)' : 'var(--fe-gray-800)',
                                                            fontWeight: isTeamView ? 400 : 500
                                                        },
                                                        children: a.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/attendance/page.js",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, this),
                                                    a.locationName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: 'var(--fe-gray-400)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "ti ti-map-pin",
                                                                style: {
                                                                    fontSize: 11
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/attendance/page.js",
                                                                lineNumber: 224,
                                                                columnNumber: 99
                                                            }, this),
                                                            " ",
                                                            a.locationName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/attendance/page.js",
                                                        lineNumber: 224,
                                                        columnNumber: 40
                                                    }, this),
                                                    a.customerNames?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: 'var(--fe-teal-600)',
                                                            marginTop: 2
                                                        },
                                                        children: [
                                                            a.customerNames.slice(0, 2).join(', '),
                                                            a.customerNames.length > 2 ? ` +${a.customerNames.length - 2}` : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/attendance/page.js",
                                                        lineNumber: 225,
                                                        columnNumber: 53
                                                    }, this),
                                                    a.comments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: 'var(--fe-gray-400)',
                                                            marginTop: 2,
                                                            maxWidth: 240,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            whiteSpace: 'nowrap'
                                                        },
                                                        children: a.comments
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/attendance/page.js",
                                                        lineNumber: 226,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 221,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `badge badge-${a.type}`,
                                                children: a.type === 'present' ? 'Present' : 'Leave'
                                            }, void 0, false, {
                                                fileName: "[project]/app/attendance/page.js",
                                                lineNumber: 228,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, a.id, true, {
                                        fileName: "[project]/app/attendance/page.js",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/attendance/page.js",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/attendance/page.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/attendance/page.js",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            showLeaveForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                onClick: ()=>setShowLeaveForm(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ti ti-calendar-time"
                                }, void 0, false, {
                                    fileName: "[project]/app/attendance/page.js",
                                    lineNumber: 240,
                                    columnNumber: 42
                                }, this),
                                " Apply for Leave"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/attendance/page.js",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: submitLeave,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "fe-label",
                                                    children: "From Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/attendance/page.js",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: "fe-input",
                                                    value: leaveForm.fromDate,
                                                    onChange: (e)=>setLeaveForm((p)=>({
                                                                ...p,
                                                                fromDate: e.target.value
                                                            })),
                                                    min: today,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/attendance/page.js",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/attendance/page.js",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "fe-label",
                                                    children: "To Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/attendance/page.js",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    className: "fe-input",
                                                    value: leaveForm.toDate,
                                                    onChange: (e)=>setLeaveForm((p)=>({
                                                                ...p,
                                                                toDate: e.target.value
                                                            })),
                                                    min: leaveForm.fromDate || today,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/attendance/page.js",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/attendance/page.js",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "fe-label",
                                                    children: "Reason"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/attendance/page.js",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "fe-input",
                                                    style: {
                                                        minHeight: 80
                                                    },
                                                    value: leaveForm.reason,
                                                    onChange: (e)=>setLeaveForm((p)=>({
                                                                ...p,
                                                                reason: e.target.value
                                                            })),
                                                    placeholder: "Reason for leave...",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/attendance/page.js",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/attendance/page.js",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/attendance/page.js",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 10,
                                        justifyContent: 'flex-end'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "fe-btn-outline",
                                            onClick: ()=>setShowLeaveForm(false),
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/attendance/page.js",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "fe-btn-primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "ti ti-send"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/attendance/page.js",
                                                    lineNumber: 258,
                                                    columnNumber: 66
                                                }, this),
                                                " Submit Request"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/attendance/page.js",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/attendance/page.js",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/attendance/page.js",
                            lineNumber: 241,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/attendance/page.js",
                    lineNumber: 239,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/attendance/page.js",
                lineNumber: 238,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/attendance/page.js",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(AttendancePage, "YEQ783sTnnYdtdHHncbgstzESDA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$ToastContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AttendancePage;
var _c;
__turbopack_context__.k.register(_c, "AttendancePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1-t4h-l._.js.map