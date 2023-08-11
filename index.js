const profile = document.querySelector(".header__link-profile");

const profileName = document.querySelector(".profile__text");
const inputs = document.querySelectorAll(".form__input");
const popupClose = document.querySelectorAll(".popup__close");
const scrollButton = document.querySelector(".footer__button-scroll");

const inputPaswword = document.querySelectorAll(".form__input-password");
const inputCheckbox = document.querySelector(".form_input-checkbox");

const ButtonSave = document.querySelector(".form__save");

const firstPassword = document.querySelector(".form__input-password-pass");
const secondPassword = document.querySelector(
  ".form__input-password-examination"
);
const inputNum = document.querySelector(".form__input-num");
const inputMail = document.querySelector(".form__input-mail");
const inputName = document.querySelector(".form__input-name");

const error = document.querySelector(".popup-error");

const popupS = document.querySelectorAll(".popup");
const popup = document.querySelector(".popup-form");
const popupCallback = document.querySelector(".popup-callback");

const inputClear = () => {
  inputs.forEach((element) => {
    element.value = "";
    error.innerHTML = "";
  });
};

const removeClass = (func) => {
  popupS.forEach((element) => {
    element.classList.remove("popup_visible");
  });
  func();
};

inputs.forEach((element) => {
  element.addEventListener("input", () => {
    ButtonSave.removeAttribute("disabled", "disabled");
  });
});

const formSave = () => {
  if (
    firstPassword.value != secondPassword.value ||
    firstPassword.value == "" ||
    secondPassword.value == "" ||
    inputNum.value == "" ||
    inputMail.value == ""
  ) {
    ButtonSave.setAttribute("disabled", "disabled");
    if (firstPassword.value != secondPassword.value) {
      error.innerHTML = "Пароли на совпадют";
    } else if (
      firstPassword.value == "" ||
      secondPassword.value == "" ||
      inputNum.value == "" ||
      inputMail.value == ""
    ) {
      error.innerHTML = "Пожалуйста заполните поля ввода";
    }
  } else {
    profileName.innerHTML = inputName.value;
    removeClass(inputClear);
    popupCallback.classList.add("popup_visible");
    setTimeout(() => {
      popupCallback.classList.remove("popup_visible");
    }, 1500);
  }
};

ButtonSave.addEventListener("click", (event) => {
  event.preventDefault();
  formSave();
});

inputCheckbox.addEventListener("click", () => {
  inputPaswword.forEach((element) => {
    if (element.getAttribute("type") == "password") {
      element.setAttribute("type", "text");
    } else {
      element.setAttribute("type", "password");
    }
  });
});

scrollButton.addEventListener("click", () => {
  let t, s;
  s = document.body.scrollTop || window.pageYOffset;
  t = setInterval(function () {
    if (s > 0) window.scroll(0, (s -= 10));
    else clearInterval(t);
  }, 1);
});

popupS.forEach((element) => {
  element.addEventListener("click", (evt) => {
    console.log("fsdf");
    if (evt.target.classList.contains("popup")) {
      evt.target.classList.remove("popup_visible");
      inputClear();
    }
  });
});

popupClose.forEach((element) => {
  element.addEventListener("click", () => {
    removeClass(inputClear);
  });
});

profile.addEventListener("click", () => {
  inputName.value = profileName.innerHTML;
  popup.classList.add("popup_visible");
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    removeClass(inputClear);
  }
});
