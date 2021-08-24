import React from "react";
import styles from "./OtherFinalForumSimple.module.scss";
import { Form, Field } from "react-final-form";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(1000);
  window.alert(JSON.stringify(values, 0, 2));
  console.log('Данные ушли на сервер')
};

export default (props) => {
  let formData = {
    stooge: "Клоун",
    toppings: [],
    party: [],
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>React Final Form</div>

      <Form
        onSubmit={onSubmit}
        initialValues={{
          ...formData,
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label>Имя</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="Имя"
              />
            </div>
            <div>
              <label>Второе имя</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Второе имя"
              />
            </div>
            <div>
              <label>Русский?</label>
              <Field name="Русость" component="input" type="checkbox" />
            </div>
            <div>
              <label>Любимый цвет</label>
              <Field name="favoriteColor" component="select">
                <option />
                <option value="#ff0000">💙 Синий</option>
                <option value="#00ff00">💛 Желтый</option>
            
              </Field>
            </div>
            <div>
              <label>С кем вы себя ассоциируете?</label>
              <Field name="toppings" component="select" multiple>
                <option value="chicken">🐓 Петух</option>
                <option value="ham">🐷 Свинья</option>
                <option value="mushrooms">🍄 Ленин</option>
                <option value="tuna">🐟 Рыба</option>
                <option value="pineapple">🍍 Ананас</option>
              </Field>
            </div>
            <div>
              <label>Лучшая партия по вашему мнению?</label>
              <div className={styles.labels}>
                <label>
                  <Field
                    name="party"
                    component="input"
                    type="checkbox"
                    value="Единая Россия"
                  />{" "}
                  Единая Россия
                </label>
                <label>
                  <Field
                    name="party"
                    component="input"
                    type="checkbox"
                    value="Единая Россия"
                  />{" "}
                   Единая Россия
                </label>
                <label>
                  <Field
                    name="party"
                    component="input"
                    type="checkbox"
                    value="Единая Россия"
                  />{" "}
                  Единая Россия
                </label>
                <label>
                  <Field
                    name="party"
                    component="input"
                    type="checkbox"
                    value="Россия Единая"
                  />{" "}
                  Россия Единая
                </label>
              </div>
            </div>
            <div>
              <label>Лучший клоун</label>
              <div className={styles.labels}>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="Автор видео"
                  />{" "}
                  Автор видео
                </label>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="Koma Corporation"
                  />{" "}
                  Koma Corporation
                </label>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="Иваныч..."
                  />{" "}
                  Иваныч...
                </label>
              </div>
            </div>
            <div>
              <label>Исповедь</label>
              <Field name="notes" component="textarea" placeholder="Notes" />
            </div>
            <div className={styles.buttons}>
              <button type="submit" disabled={submitting || pristine}>
                Отправить
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Стереть
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};
