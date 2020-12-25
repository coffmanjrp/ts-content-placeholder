const header = document.getElementById('header') as HTMLDivElement;
const title = document.getElementById('title') as HTMLHeadingElement;
const excerpt = document.getElementById('excerpt') as HTMLParagraphElement;
const profileImg = document.getElementById('profile_img') as HTMLDivElement;
const nameEl = document.getElementById('name') as HTMLElement;
const dateEL = document.getElementById('date') as HTMLElement;

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt=""/>';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit recusandae cupiditate laboriosam, quisquam corrupti.';
  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  nameEl.innerHTML = 'John Doe';
  dateEL.innerHTML = 'Dec 24, 2020';

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach((text) => text.classList.remove('animated-bg-text'));
}

setTimeout(getData, 2500);
