const users = [
    { id: 1, name: 'abul', job: 'doctor' }
]
// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'Dabul', job: 'midar' },
    ]
}
const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id: 50001,
    name: 'Thomas Alba Edison',
    address: {
        street: {
            first: '45/A kochukhet lane',
            second: 'Third floor',
            side: 'Right Side'
        },
        postoffice: 'cantonment',
        city: 'Dhaka'
    }
}
const userFloor = user.address.street.side;
console.log(userFloor);