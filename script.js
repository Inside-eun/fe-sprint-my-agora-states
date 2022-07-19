// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

//submit 버튼을 누르면 화면에 추가되는 기능
const submitButton = document.querySelector(".form__submit > input");
const submitName = document.querySelector(".form__input--name > input")
const submitTitle = document.querySelector(".form__input--title > input")
const submitQuestion = document.querySelector("#story")
const nameAndTime = document.querySelector(".discussion__information")

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const obj = {
    id: "random id",
    createdAt: new Date().toISOString(),
    title: submitTitle.value,
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
    author: submitName.value,
    answer: null,
    bodyHTML:submitQuestion.value,
    avatarUrl:
      "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
  };
  agoraStatesDiscussions.unshift(obj);
  const newDiscussion = convertToDiscussion(obj);
  // console.log(submitTitle.value);
  ul.prepend(newDiscussion); //appendChild가 아니라!!
})

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper"; //아바타 이미지
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";
  const discussionAnsweredBox = document.createElement("p");
  const avatarImg = document.createElement('img');
  const discussionContentWriter = document.createElement('div')
  discussionContentWriter.className = "discussion__information"
  const discussionOnTitle = document.createElement('a');

// 이미지
  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = 'avatar of ' + obj.author;
  avatarWrapper.append(avatarImg);
  li.append(avatarWrapper, discussionContent, discussionAnswered);
  const ul = document.querySelector('ul.discussions__container');
  ul.append(li);
  // 제목과 링크
  discussionOnTitle.textContent = obj.title;
  discussionOnTitle.href = obj.url;
  // 작성자 정보
  ;

  discussionContentWriter.textContent = `${obj.author} / ${obj.createdAt}`
  // 체크박스
  discussionAnsweredBox.textContent = '☑'
  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  li.append(avatarWrapper, discussionContent, discussionAnswered);
  discussionContent.append(discussionOnTitle, discussionContentWriter);
  discussionAnswered.append(discussionAnsweredBox)
  return li;
};




// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};



// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);

