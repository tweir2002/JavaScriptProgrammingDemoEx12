const createBtn = $('#btnCreate');
const txtFirstName = $('#txtFirstName');
const txtLastName = $('#txtLastName');
const txtDOB = $('#txtDOB');

const err = $('#errors');
const tb = $('#people');

createBtn.addEventListener('click', addPerson);

function addPerson()
{
    let p = new Person(txtFirstName.value, txtLastName.value, new Date('${txtDOB.value}T00:00:00'));

    let tr = createElement('tr');
    let tdFirstName = createElement('td');
    let tdLastName = createElement('td');
    let tdAge = createElement('td');

    tdFirstName.textContent = p.firstName;
    tdLastName.textContent = p.lastName;
    tdAge.textContent = p.age();

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdAge);

    tb.appendChild(tr);
}

function clearForm()
{
    txtFirstName.value = '';
    txtLastName.value = '';
    txtDoB.value = '';
}

function $(selector)
{
    return document.querySelector(selector);
}

function createElement(element)
{
    return document.createElement(element);
}