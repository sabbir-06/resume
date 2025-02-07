class Helpers {
    getUsersByStatus(response, status) {
        const users = [];

        // Your code here

         // Check if the response contains a valid 'users' array
        if (response && Array.isArray(response.users)) {
            // Loop through each user in the array
            response.users.forEach(user => {
                // Check if the user's role status matches the given status
                if (user.role && user.role.status === status) {
                    users.push(user.name); // Add the user's name to the result array
                }
            });
        }
        ////////////////////////////
        return users;
    }

    getUsersByRole(response, role, roleId) {
        const users = [];

        // Your code here

        // Check if the response contains a valid 'users' array
    if (response && Array.isArray(response.users)) {
        // Loop through each user in the array
        response.users.forEach(user => {
            // Check if the user's role matches the given role and role ID
            if (
                user.role &&
                user.role.name.toLowerCase() === role.toLowerCase() && // Case-insensitive role name match
                user.role.id === roleId // Match role ID
            ) {
                users.push(user.name); // Add the user's name to the result array
            }
        });
    }

        return users;
    }

    getUsersByEmailDomain(response, domain) {
        const users = [];

        // Your code here

// Check if the response contains a valid 'users' array
if (response && Array.isArray(response.users)) {
    // Loop through each user in the array
    response.users.forEach(user => {
        // Convert email and domain to lowercase and check if email matches the domain
        if (
            user.email &&
            user.email.toLowerCase().includes(`@${domain.toLowerCase()}.com`) // why I had to use .include? ask gpt
        ) {
            users.push(user.name); // Add the user's name to the result array
        }
    });
}


        return users;
    }

    getUserBalanceByCurrency(response, currency) {
        const balances = [];

        // Your code here
        if (response && Array.isArray(response.users)) {
            // Loop through each user in the array
            response.users.forEach(user => {
                // Check if the user's currency matches the specified currency
                if (user.currency === currency) {
                    balances.push(user.balance); // Add the user's balance to the result array
                }
            });
        }
    

        return balances;
    }
}

export default new Helpers()