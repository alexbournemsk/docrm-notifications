export const headerStyles = {
    top: {
        gridColumn: '1 /span 12',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: '30px',
        fontWeight: 600,
        lineHeight: 1.33
    },

    searchAndProfile: {
        textAlign: 'right',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },

    searchInput: {
        minWidth: '250px',
        marginRight: '20px',
        borderRadius: '30px',
        border: '0',
        padding: '12px'
    },

    profile: {
        fontSize: '12px',
        fontWeight: 'normal',
    },

    navigation: {
        marginTop: '10px',
        paddingBottom: '12px',
        gridColumn: '1 /span 12',
        display: 'flex',
        borderBottom: '1px solid #c8cace',
    },

    navigationItem: {
        marginRight: '20px',
        fontSize: '14px',
        fontWeight: 700,
        color: 'rgb(25, 34, 51)'
    }
}