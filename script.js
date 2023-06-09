'use strict';

const category2 = document.querySelector('.category-2');

// Language Visibility

const data = [
  {
    id: 1,
    company: 'Photosnap',
    logo: './images/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 2,
    company: 'Manage',
    logo: './images/manage.svg',
    new: true,
    featured: true,
    position: 'Fullstack Developer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    languages: ['Python'],
    tools: ['React'],
  },
  {
    id: 3,
    company: 'Account',
    logo: './images/account.svg',
    new: true,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2d ago',
    contract: 'Part Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
  {
    id: 4,
    company: 'MyHome',
    logo: './images/myhome.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '5d ago',
    contract: 'Contract',
    location: 'USA Only',
    languages: ['CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 5,
    company: 'Loop Studios',
    logo: './images/loop-studios.svg',
    new: false,
    featured: false,
    position: 'Software Engineer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['Ruby', 'Sass'],
  },
  {
    id: 6,
    company: 'FaceIt',
    logo: './images/faceit.svg',
    new: false,
    featured: false,
    position: 'Junior Backend Developer',
    role: 'Backend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'UK Only',
    languages: ['Ruby'],
    tools: ['RoR'],
  },
  {
    id: 7,
    company: 'Shortly',
    logo: './images/shortly.svg',
    new: false,
    featured: false,
    position: 'Junior Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['HTML', 'JavaScript'],
    tools: ['Sass'],
  },
  {
    id: 8,
    company: 'Insure',
    logo: './images/insure.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['Vue', 'Sass'],
  },
  {
    id: 9,
    company: 'Eyecam Co.',
    logo: './images/eyecam-co.svg',
    new: false,
    featured: false,
    position: 'Full Stack Engineer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '3w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript', 'Python'],
    tools: ['Django'],
  },
  {
    id: 10,
    company: 'The Air Filter Company',
    logo: './images/the-air-filter-company.svg',
    new: false,
    featured: false,
    position: 'Front-end Dev',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '1mo ago',
    contract: 'Part Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
];

// Destructuring the data
let [one, two, three, four, five, six, seven, eight, nine, ten] = [
  data[0],
  data[1],
  data[2],
  data[3],
  data[4],
  data[5],
  data[6],
  data[7],
  data[8],
  data[9],
];

const html = function (
  company,
  logo,
  isNew,
  isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools
) {
  return `<div class="container p-4 item mb-5">
  <div class="row">
    <div class="col">
      <img src="${logo}" alt="" />
      <div class="group">
        <div class="d-flex gap-3">
          <h6 class="company">${company}</h6>
          <h6><span class="${isNew ? 'new' : ''}">${
    isNew ? 'new!' : ''
  }</span></h6>
          <h6><span class="${isFeatured ? 'featured' : ''}">${
    isFeatured ? 'featured' : ''
  }</span></h6>
        </div>
        <h5 class="effect">${position}</h5>
        <div class="list">
          <ul class="d-flex gap-4">
            <li class="list-unstyled">${postedAt}</li>
            <li>${contract}</li>
            <li>${location}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="container stack">
        <ul class="skill d-flex gap-4">
          <li class="category role">${role}</li>
          <li class="category level">${level}</li>
          ${
            languages[0] && languages[1] && languages[2]
              ? `<li class="category category-1">${languages[0]}</li>
          <li class="category category-2">${languages[1]}</li>
          <li class="category category-3">${languages[2]}</li>`
              : HTMLlogic(
                  languages[0],
                  languages[1],
                  languages[2],
                  tools[0],
                  tools[1]
                )
          }
        </ul>
      </div>
    </div>
  </div>
</div>`;
};

// function for inner HTML
function HTMLlogic(lang1, lang2, lang3, tool0, tool1) {
  if (!(lang1 && lang2 && lang3)) {
    return `<li class="category category-1">${lang1}</li>
  <li class="category category-2">${lang2 ? lang2 : tool0}</li>
  ${lang2 && tool0 ? `<li class="category category-3">${tool0}</li>` : ''}
  ${
    tool1 ? `<li class="category category-3">${lang3 ? lang3 : tool1}</li>` : ''
  }`;
  }
}

// Dynamically creating the jobs -- function
const headerId = document.querySelector('.header-img-container-0');
function insertContent(content) {
  headerId.insertAdjacentHTML(
    'afterend',
    html(
      content.company,
      content.logo,
      content.new,
      content.featured,
      content.position,
      content.role,
      content.level,
      content.postedAt,
      content.contract,
      content.location,
      content.languages,
      content.tools
    )
  );
  const category3 = document.querySelector('.category-3');
  if (!category3) {
    category3.style.display = 'none';
  }
  // Border for the new and featured jobs
}

// Insert the HTML into the divs
const numbers = [ten, nine, eight, seven, six, five, four, three, two, one];
numbers.forEach(number => insertContent(number));
const items = document.querySelectorAll('.featured');
items.forEach(item => {
  if (item.classList.contains('featured')) {
    item.closest('.item').classList.add('exclusiveBorder');
  }
});
const stack = document.querySelectorAll('.stack');

// All Stack elements
const arr = [];

data.forEach(data => {
  arr.push(data.role);
  arr.push(...data.languages);
  arr.push(...data.tools);
});

let uniqueArr = arr.filter(
  (value, index, array) => array.indexOf(value) === index
);

// console.log(uniqueArr);

// filter function
const filter = document.querySelector('.filter');

function insertIntoFilter(item) {
  const newDiv = document.createElement('div');

  newDiv.innerHTML = `<div class="d-flex filter-item ms-4 gap-3">
  <h6 class="filter-type ms-2">${item}</h6>
  <button class="border-0 close">❌</button>
  </div>`;

  filter.append(newDiv);
}

// Adding and removing filter items into filter section
stack.forEach(el =>
  el.addEventListener('click', e => {
    if (e.target.classList.contains('skill')) return;
    insertIntoFilter(e.target.textContent);
    const filterItem = document.querySelectorAll('.filter-item');

    filterItem.forEach(item =>
      item.addEventListener('click', e => {
        if (e.target.classList.contains('close')) {
          item.remove();
        }
      })
    );
  })
);

// Select all items
stack.forEach(el =>
  el.addEventListener('click', e => {
    // console.log(e.target.textContent);
  })
);
// for items containing a certain skill, display only those items that has that skill
items.forEach(item =>
  item.addEventListener('click', e => {
    console.log(e.target.textContent);
  })
);
