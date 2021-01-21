import { keywords } from './common';

const table = document.querySelector('.table');
const totalNumber = document.querySelector('.total');

if (keywords !== undefined) {
    totalNumber.textContent += +localStorage.getItem('total');
    for (let i = 0; i < keywords.length; i += 1) {
        const row = document.createElement('tr');
        const keyword = document.createElement('td');
        keyword.textContent = keywords[i];
        const numberOfRequests = document.createElement('td');
        numberOfRequests.textContent = localStorage.getItem(keywords[i]);

        row.appendChild(keyword);
        row.appendChild(numberOfRequests);
        table.appendChild(row);
    }
}
