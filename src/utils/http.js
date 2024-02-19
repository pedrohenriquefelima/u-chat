import { baseUrl,getRequest } from "./services";

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export async function fetchUsers(){
    const response = await getRequest(`${baseUrl}/users`);
    
    if(response.error) {
        throw new Error('Failed to fetch users!');
    }

    const users = response.map(item => item);

    return users;
}

export async function fetchInterestsOptions(){
    const response = await getRequest(`${baseUrl}/interests`);
    if(response.error) {
        throw new Error('Failed to fetch users!');
    }

    response.sort((a, b) => a.label.localeCompare(b.label));
    //remove popula ones and put on its on grouping
    let interestGrouped = [];
    interestGrouped.push({Popular: response.filter(item => item.popular)});

    for (let step = 0; step < ALPHABET.length; step++) {
        const letter = ALPHABET[step].toLowerCase();
        interestGrouped.push({[ALPHABET[step]] : response.filter(item => item.label.toLowerCase().startsWith(letter) && !item.popular)});
    }
    interestGrouped = interestGrouped.filter(item => Object.values(item)[0] && Object.values(item)[0].length > 0);

    return interestGrouped;
}