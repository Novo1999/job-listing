'use strict';
const topItem = document.querySelector('.top-item');
const category = document.querySelectorAll('.category');
const category2 = document.querySelector('.category-2');
const category3 = document.querySelector('.category-3');
const stack = document.querySelector('.stack');
// Language Visibility
if (category2 && category3) {
  category2.style.display = 'block';
  category3.style.display = 'block';
  stack.classList.remove('stack');
}

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
  return `<div class="container mt-4">
<!-- Item Start -->
<div class="container item d-flex ps-3 pt-1 pb-1">
  <img class="w-25 h-25 mt-3" src="${logo}" alt="" />
  <div class="container d-flex gap-3 mt-3 ms-3">
    <h6 class="title fw-bold">${company}</h6>
    <span class="${isNew === true ? 'new' : ''}">New!</span> <span class="${
    isFeatured === true ? 'featured' : ''
  }"> Featured</span>
  </div>
  <div class="container mt-5 ms-5 designation">
    <h1 class="fs-5 ms-1 job">${position}</h1>
    <ul class="container d-flex gap-4 ms-2">
      <li>${postedAt}</li>
      <li>${contract}</li>
      <li>${location}</li>
    </ul>
  </div>

  <div class="container stack">
    <ul class="skill d-flex gap-4 mt-5">
      <li class="category role">${role}</li>
      <li class="category level">${level}</li>
      <li class="category category-1">${languages[0]}</li>
      <li class="category added1 category-2">${languages[1]}</li>
      <li class="category added2 category-3">${languages[2]}</li>
      <li class="category">${tools}</li>
    </ul>
  </div>
</div>
</div>`;
};

function insertContent() {
  topItem.insertAdjacentHTML(
    'afterend',
    html(
      two.company,
      two.logo,
      two.new,
      two.featured,
      two.position,
      two.role,
      two.level,
      two.postedAt,
      two.contract,
      two.location,
      two.languages,
      two.tools
    )
  );
}

insertContent();
