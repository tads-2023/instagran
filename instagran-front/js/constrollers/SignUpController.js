class SignUpController {
  init() {
    this.setContainer = document.querySelector("#main");
    let view = new SignUpView().template();
    this.container.innerHTML = view;
    this.bind();
  }

  set setContainer(main) {
    this.container = main;
  }
}