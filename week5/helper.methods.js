class Helpers {
    getUsersByAge(response, ageMin, ageMax) {
        const users = [];

        // Your code here
    
       // Check if the response contains a valid users array
if (response && Array.isArray(response.users)) {
    // Loop through each user in the array
    response.users.forEach(user => {
        // Ensure that the user has an age property and check if the age is within the range
        if (user.age !== undefined && user.age >= ageMin && user.age <= ageMax) {
            users.push(user.name); // Add the user to the result array
        }
    });
}

        

        return users;
    }

    getUsersByRole(response, role) {
        const users = [];

        // Your code here

// Check if the response contains a role
if (response && Array.isArray(response.users)) {
    // Loop through each user in the array
    response.users.forEach(user => {
        // Ensure that the user has an role property and check if dynimall property match
        if (user.role !== undefined && user.role === role) {
            users.push(user.name); // Add the user to the result array
        }
    });
}



        return users;
    }

    getUsersByCountry(response, country) {
        const users = [];

        // Your code here
// Check if the use has country
if (response && Array.isArray(response.users)) {
    // Loop through each user in the array
    response.users.forEach(user => {
        // Ensure that the user has an country property and check if dynimally populated property match
        if (user.country !== undefined && user.country === country) {
            users.push(user.name); // Add the user to the result array
        }
    });
}


        return users;
    }

    getUsersByBalance(response, balMin, balmax){
        const users = [];
        //check  if user has balance
    if (response && Array.isArray(response.users)) {
        // Loop through each user in the array
        response.users.forEach(user => {
        // ensure that the user has balance between the expected dynamically populated value
        if (user.balance !== undefined && user.balance >= balMin && user.balance <= balmax) {
                users.push(user.name); // add hte user to the result array
            }
        })
    }

    return users;

      
    }
        

    
}

export default new Helpers()