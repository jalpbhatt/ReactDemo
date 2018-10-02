/* Overall Actions Required */

/* 

// Login Reducer
1. AUTHORISER_LOGIN
2. AUTHORISER_LOGOUT

// Visitor Reducer

3. ADD_NEW_VISITOR (Which is sign in visitor flow)
4. UPLOAD_VISITOR_SIGNATURE
5. FETCH_SIGNED_IN_VISITOR_LIST
6. UPLOAD_VISITOR_DOC
7. SIGNED_OUT_VISITOR
8. FETCH_SIGNED_OUT_VISITOR_LIST

// Search Reducer

9. FETCH_SEARCH_VISITOR_LIST

*/

const nav = {
    showSearch: false,
    displayHeaderStr: "",
    showHeaderWithTitle: false
}

const DefaultState = {
    employee: {
        userName: "",
        password: "",
        branchCode: "",
        isSignedIn: false,
        employeeType: "", // Authoriser or Superuser
        uniqueEmpId: "" // UUID from backend
    },
    newVisitorDetails: {
        visitorName: "",
        vendorName: "",
        jobType: "",
        visitorIdNumber: "",
        visitorIdType: "",
        visitorIdExpiryDate: 1000,
        visitorSignatureFile: "" // This is jpeg/png image
    },
    visitorList: {
        signedInVisitors: [
            {
                id: 1,
                visitorName: "",
                vendorName: "",
                jobType: "",
                visitorIdNumber: "",
                visitorIdType: "",
                visitorIdExpiryDate: 1000, // in ms
                visitDate: 500,
                inTime: 1000,
                docUploadComplete: false
            },
            {
                id: 2,
                visitorName: "",
                vendorName: "",
                jobType: "",
                visitorIdNumber: "",
                visitorIdType: "",
                visitorIdExpiryDate: 1000, // in ms
                visitDate: 500,
                inTime: 1000,
                docUploadComplete: false
            }
        ],
        signedOutVisitors: [
            {
                id: 1,
                visitorName: "",
                vendorName: "",
                jobType: "",
                visitorIdNumber: "",
                visitorIdType: "",
                visitorIdExpiryDate: 1000, // in ms
                visitDate: 500,
                inTime: 1000,
                outTime: 1000,
                docUploadComplete: false
            },
            {
                id: 2,
                visitorName: "",
                vendorName: "",
                jobType: "",
                visitorIdNumber: "",
                visitorIdType: "",
                visitorIdExpiryDate: 1000, // in ms
                visitDate: 500,
                inTime: 1000,
                outTime: 1000,
                docUploadComplete: false
            }
        ]
    },
    searchVisitorDetails: {
        searchCriteria: {
            fromDate: 1000,
            toDate: 1000,
            visitorName: "",
            vendorName: "",
            jobType: "",
            branchCode: ""
        },
        searchVisitorList: [
            {
                branchCode: "",
                visitorList: [
                    {
                        id: 1,
                        visitorName: "",
                        vendorName: "",
                        jobType: "",
                        visitorIdNumber: "",
                        visitorIdType: "",
                        visitorIdExpiryDate: 1000, // in ms
                        visitDate: 500,
                        inTime: 1000,
                        outTime: 1000,
                        docUploadComplete: false
                    },
                    {
                        id: 2,
                        visitorName: "",
                        vendorName: "",
                        jobType: "",
                        visitorIdNumber: "",
                        visitorIdType: "",
                        visitorIdExpiryDate: 1000, // in ms
                        visitDate: 500,
                        inTime: 1000,
                        outTime: 1000,
                        docUploadComplete: false
                    }
                ]
            },
            {
                branchCode: "",
                visitorList: [
                    {
                        id: 1,
                        visitorName: "",
                        vendorName: "",
                        jobType: "",
                        visitorIdNumber: "",
                        visitorIdType: "",
                        visitorIdExpiryDate: 1000, // in ms
                        visitDate: 500,
                        inTime: 1000,
                        outTime: 1000,
                        docUploadComplete: false
                    },
                    {
                        id: 2,
                        visitorName: "",
                        vendorName: "",
                        jobType: "",
                        visitorIdNumber: "",
                        visitorIdType: "",
                        visitorIdExpiryDate: 1000, // in ms
                        visitDate: 500,
                        inTime: 1000,
                        outTime: 1000,
                        docUploadComplete: false
                    }
                ]
            }
        ]
    }
}

export default DefaultState;