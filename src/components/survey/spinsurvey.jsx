//In your react App.js or yourComponent.js file add these lines to import
import * as Survey from "survey-react";
import "survey-react/survey.css";
import React, { Component } from "react";
const rtlLanguages = ["fa"];
function setPageDirection(language) {
  const dir = rtlLanguages.includes(language) ? "rtl" : "ltr";
  document.documentElement.dir = dir;
}
setPageDirection("fa"); // rtl
class SPINSurvey extends Component {
  //Define Survey JSON
  //Here is the simplest Survey with one text question

  json = {
    pages: [
      {
        questions: [
          {
            type: "matrix",
            name: "",
            title:
              "\
                    من از افراد صاحب قدرت می ترسم. \
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q2",
            title:
              "\
                    از اینکه جلوی مردم سرخ شوم ناراحت خواهم شد. \
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q3",
            title:
              "\
                                    مهمانی ها و گردهمایی ها مرا می ترساند.\
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q4",
            title:
              "\
                    من از صحبت کردن با افرادی که نمی شناسم اجتناب می کنم. \
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q5",
            title:
              "\
              مورد انتقاد قرار گرفتن خیلی مرا می ترساند. \
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q6",
            title:
              "\
                    ترس از دستپاچه شدن موجب می شود تا از انجام کارها یا صحبت کردن با افراد اجتناب کنم.\
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q7",
            title:
              "\
                    عرق کردن در برابر دیگران مرا آشفته می کند. \
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q8",
            title:
              "\
              از رفتن به مهمانی ها اجتناب می کنم.\
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q9",
            title:
              "\
                    از فعالیت هایی که در آن ها مرکز توجه باشم اجتناب می کنم.\
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q10",
            title:
              "\
                    دچار لرزش شدن در مقابل دیگران برایم ناراحت کننده است.\
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q11",
            title:
              "\
              صحبت کردن با غریبه ها مرا می ترساند.\
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q12",
            title:
              "\
                    من از صحبت در حضور جمع اجتناب می کنم. \
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q13",
            title:
              "\
                    من همه کار انجام می دهم تا مورد انتقاد قرار نگیرم.\
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q14",
            title:
              "\
                    زمانی که با مردم هستم تپش قلب مرا ناراحت می کند.\
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q15",
            title:
              "\
              وقتی که دیگران مرا زیر نظر دارند، از انجام کارها دچار ترس می شوم.\
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q16",
            title:
              "\
                    احساس خجالتی بودن یا احمق به نظر رسیدن از جمله ترس های جدی من است.\
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
      {
        questions: [
          {
            type: "matrix",
            name: "q17",
            title:
              "\
              از صحبت کردن با فردی که صاحب قدرت و مقام است اجتناب می کنم.\
                    ",
            isRequired: true,
            columns: [
              {
                value: 1,
                text: "خیلی کم",
              },
              {
                value: 2,
                text: "کم",
              },
              {
                value: 3,
                text: "تا حد",
              },
              {
                value: 4,
                text: "زیاد",
              },
              {
                value: 5,
                text: "خیلی زیاد",
              },
            ],
          },
        ],
      },
    ],
  };

  // And use as:
  // directionVariable = 'rtl'|'ltr'

  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
  }
  render() {
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.
    var model = new Survey.Model(this.json);
    return (
      <div>
        <p>
          لطفا موارد زیر را بخوانید و مشخص کنید این مسائل، طی هفته گذشته تا چه
          میزانی برای شما مشکل ایجاد کرده است.",
        </p>
        <Survey.Survey
          locale={"fa"}
          model={model}
          onComplete={this.onComplete}
        />
      </div>
    );
    /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
    //You may pass model properties directly into component or set it into model
    // <Survey.Survey model={model} mode="display"/>
    //or
    // model.mode="display"
    // <Survey.Survey model={model}/>
    // You may change model properties outside render function.
    //If needed react Survey Component will change its behavior and change UI.
  }
}
export default SPINSurvey;
