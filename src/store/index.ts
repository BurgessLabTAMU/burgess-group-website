import { createStore } from "vuex";
import members from "../assets/members.json";
import formerMembers from "../assets/formerMembers.json";
import papers2021 from "../assets/papers-2021.json";
import papers2020 from "../assets/papers-2020.json";
import papers2019 from "../assets/papers-2019.json";
import papers2018 from "../assets/papers-2018.json";
import papers2017 from "../assets/papers-2017.json";
import papers2016 from "../assets/papers-2016.json";
import patents from "../assets/patents.json";
import books from "../assets/books.json";
import bookReviews from "../assets/bookReviews.json";
import softwares from "../assets/softwares.json";

export default createStore({
  state: {
    members,
    formerMembers,
    papers: {
      2021: papers2021,
      2020: papers2020,
      2019: papers2019,
      2018: papers2018,
      2017: papers2017,
      2016: papers2016
    },
    patents,
    books,
    bookReviews,
    softwares
  }
});
