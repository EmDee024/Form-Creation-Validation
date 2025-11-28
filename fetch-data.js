// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container where data will appear
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data from API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear existing content ("Loading user data...")
        dataContainer.innerHTML = '';

        // Step 6: Create UL list
        const userList = document.createElement('ul');

        // Step 7: Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append list to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 8: Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Step 9: Run when DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
