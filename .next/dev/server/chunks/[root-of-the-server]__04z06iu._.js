module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/store.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/api/locations/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.js [app-route] (ecmascript)");
;
;
async function GET() {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStore"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        locations: store.locations
    });
}
async function POST(request) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStore"])();
    try {
        const { name, city, state } = await request.json();
        if (!name) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Name is required'
        }, {
            status: 400
        });
        const loc = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nextId"])('loc'),
            name,
            city: city || '',
            state: state || ''
        };
        store.locations.push(loc);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            location: loc
        }, {
            status: 201
        });
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Server error'
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStore"])();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const idx = store.locations.findIndex((l)=>l.id === id);
    if (idx === -1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Not found'
    }, {
        status: 404
    });
    store.locations.splice(idx, 1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__04z06iu._.js.map