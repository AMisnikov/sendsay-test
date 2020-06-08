# Sendsay Console App

Ссылка на приложение <https://sendsay-test-101.herokuapp.com/>

## 1.Файловая структура проекта и технологии

Структура проекта представлена тремя основными папками - public, server, src.
Папка public содержит скомпилированные файлы для "деплоя".
Папка server содержит один-единственный скрипт server.js, неоходимый только лишь для того, чтобы heroku "поднял" проект на этом маленьком сервере.
Папка src содержит исходный код.

Коротко о используемых технологиях:

### Webpack

Для сборки проекта использовался Webpack. Я знаю про существование Create React App и ни в коем случае не хочу (и не могу очевидно) конкурировать со сборкой из Create React App, я понимаю, что там трудилась крутая команда разработчиков и их сборка более оптимизированная и более правильная. Единственная цель использования Webpack была показать, что владею данным инструментом и могу написать свою сборку достаточно быстро. (Если необходимо, могу переделать свой проект под Create React App).

### SASS

Для написания стилей использовал препроцессор SASS с использованием синтаксиса SCSS. Данный препроцессор использовался мной, т.к. мне нравится использование переменных (я знаю, что CSS поддерживает уже данную фичу, но в  SASS мне кажется это более удобно реализовано), миксинов, вложенностей, возможность удобно "бить" код на модули, использовать циклы при необходимости и т.д. В общем, мне гораздо удобнее писать код на SASS, чем на чистом CSS, а это я думаю главное при выборе той или иной технологии. В сочетании с БЭМ использование SASS становится особенно удобным и, на мой взгляд, легкочитаемым с использованием "&".

Стилевые файлы находятся в папке src/styles/scss. Структура папок внутри организована согласно шаблона 7-1. Почитать о нем можно здесь <https://sass-guidelin.es/#architecture>. В случае с React обычно принято стилевые файлы хранить рядом с компонентом и подключать непосредственно в js файл компонента, но мне больше по душе шаблон, указанный выше, хотя могу работать с разными подходами.

### БЭМ

БЭМ используется для именования классов и тут для меня у БЭМ преимущества следующие: самодокументируемость верстки и возможность использование модульного подхода, когда блоки могут использоваться независимо. Я также использую технологию, называемую "миксование классов", поэтому часто в моем коде можно увидеть что-то вроде этого:

```<div class="logo header__logo ></div>```

Т.е. класс .logo отвечает за независимые стили конкретного блока logo, а класс .header__logo описывает стили блока .logo, но уже как элемента другого блока - .header

### UUID

Использовал данную библиотеку для генерации уникальных id каждого запроса, чтобы было удобнее работать с хранилищем запросов

### JS-beautify

Испольовался для "красивого" форматирования текста запроса в форме

### Normalize.css

Использовался для "сброса" стилей, чтобы одни и те же элементы в разных браузерах выглядели "более одинаково".

Про такие технологии как React, React-DOM, React-Router-Dom, Redux думаю писать смысла нет, они все были по условиям задания, тут выбор не стоял. Скажу только, что в качестве middleWare Redux использовал Redux-thunk для того, чтобы делать асинхронные (и не только) операции перед тем, как "кидать" action в reducer.

## 2.Структура проекта

### 2.1 Страница авторизации

#### Общее

URL: "/"

Страница недоступна если пользователь залогинен! При попытке залогиненного пользователя перейти на страницу, будет происходить редирект на /app. Для перехода на страницу логина нужно выполнить logout из приложения.

#### Валидация формы

Валидация реализована мной в режиме "live", т.е. по дефолту кнопка отправить заблокирована, т.е. пользователь не может отправить пустую форму, по мере ввода в то или иное поле осуществляется "живая" валидация и в случае ошибок пользовательського ввода поле подсвечивается и выдается ошибка под полем (этого не было в макете, добавил сам). Если все поля заполнены правильно, то кнопка Отправить становится активной. При нажатии уходит запрос в sendsay api, на кнопке появляется лоадер, сама кнопка при это не активна, при ошибке лоадер исчезает, но сама кнопка все еще не активна (чтобы пользователь повторно не отправлял ошибочные данные) и выводится сообщение об ошибке. При успешном ответе происходит "логин" (об этом дальше).

Почему использовал именно такой подход валидации? Мне кажется это более "правильный" вариант с точки зрения взаимодействия с пользователем, т.к. пользователь сразу видит что, где и как ему необходимо заполнить, чтобы успешно отправить форму, а не заполнить все поля и потом узнать, что сделано не правильно.

Сам компонент формы имеет local state, управление состояние формы происходит с помощью хука useReducer. Почему не хранить состояние формы Redux? Ни один из компонентов приложения не нуждается в данных, которые пользователь вводит, т.е. нет смысла ими делиться, ни один из других компонентов не может и не должен менять данные формы. Поэтому для данного компонента я выбрал local state.

Теперь о правилах валидации:

Логин: обязательное поле, значением могут быть либо e-mail либо строка из латинских букв, цифр и подчеркиваний.
Сублогин: необязательное поле, значением может быть только строка из латинских букв, цифр и подчеркиваний.
Пароль: обязательное поле, значение не должно содержать кириллицу.

Такие параметры валидации я установил опираясь на описание из тестового задания и опыт работы с Вашим интерфейсом. От себя хочу добавить, что я бы не стал вобще ставить валидацию (кроме обязательности заполнения) на поле с паролем. Ведь мы здесь не создаем аккаунт, а осуществляем вход, пусть пользователь пишет что хочет, лучше подсказать ему, что он включил CAPS случайно или забыл переключить раскладку и т.д.

#### Как происходит авторизация?

Мой изначальный вариант включал использование метода login вашей библиотеки-коннектора, однако данный метод при успешном запросе не возвращает данных, поэтому для получения аккаунта если пользователь вошел с e-mail мне необходимо было кидать дополнительный pong, поэтому от метода я отказался. Текущий вариант включает следующую логику: коннектору назначаю свойство auth и кидаю "pong", при ошибке вывожу ошибку, при успехе сохраняю пользователя и делаю логин. Пользователя сохраняю в localStorage в виде объекта sendsay_user, содержащего номер сессии (для последующего доступа), логин и сублогин. Соответствующий пользователь прописывается в хранилище Redux.

При загрузке приложения оно смотрит в local storage и если видит там sendsay_user, то проверяет жива ли сессия (т.к. мы этого не знаем) путем отправки "pong" и если сессия жива, логиним пользователя, если нет, очищаем localStorage и показываем форму авторизации.

### 2.2 Страница консоли

#### Общее

URL: "/app"

Страница недоступна если пользователь незалогинен!

#### Хэдэр

Лого сделал просто картинкой (не ссылкой), т.к. страница одна и смысла в этом нет.

Кнопка выйти кидает запрос с logout в sendsay api, делает logout из хранилища Redux и очищает localStorage. Юзера при этом редиректит на страницу авторизации.

Кнопка "Развернуть на весь экран" меняет соответствующее знаечение viewSetting в Redux хранилище, приложение реагирует соответствующим образом.

#### История

Историю запросов принял решение хранить также в localStorage. Имя объекта истории формируется по схеме login:sublogin (sublogin соответственно только в том случае если юзер зашел с саблогином). Когда пользователь логинится, приложение смотрит в localStorage и, если находит там историю, с ключом login:sublogin, то показывает ее. При logout история не удаляется, поэтому можно выполнить logout и потом login, история подгрузится. Удалить историю и очистить localStorage можно только прямым нажатием кнопки очистки истории. 

Элементы истории сделал с минимальной шириной равной ширине дропдауна, т.к. при ширине авто иногда не помещается слово "скопировано" и, если первый запрос в истории "узкий", дропдаун вылазит за окно, что по мне выглядит плохо. Клик по запросу подставляет запрос и ответ в поля формы.

История скролится колесом мыши на десктопе и пальцем на мобиле.

Если история пуста, вывожу сообщение и не показываю кнопку очистки истории (добавил от себя).

#### Дропдаун

Дропдаун умеет открываться вверх и вниз как по заданию, правда я не нашел практического применения данной фичи в приложении, т.к. история всегда вверху экрана и вверху как раз таки места всегда мало, а вот внизу много. 

Также дропдаун можно открыть только один, при клике вне дропдауна он закрывается, при клике на какое-либо действие, происходит именно оно, здесь расписывать ничего не нужно наверно.

Непонятно было как ведет себя открытый дропдаун если пользователь еще и скролит. Я сделал так, что дропдаун "ездит" вмесе с элементом, на котором он открыт и, если элемент "уезжает" за пределы окна, дропдаун пропадает и появляется если элемент снова "выезжает" обратно.

##### Форма отправки запроса/получения ответа

Поле ответа доступно только для чтения. Неудачный запрос подсвечивает его красным, Тут как по заданию.

На поле запроса установлены следующие правила валидации: запросом должен быть валидный JSON, запрос должен содержать свойство  action. Сама логика валидации ровно такая же как на странице авторизации, т.е. "вживую", ошибки выводятся под форму (этого не было в макете, добавил сам).

Кнопка форматировать делает beutify тексту запроса. Редактор кода не подключал, мне кажется он тут лишний, подключил моноширинный шрифт из Google Fonts.

Кнопка отправить также показывает лоадер при отправке запроса, все как на странице авторизации.

При отправке запроса проверяется его "уникальность" путем проверки свойств объекта с каждым элементом текущей истории.

Здесь для хранения данных формы использовал Redux, т.к. другие элементы должны иметь к ним доступ, к примеру, клик по элементу запроса заполняет поля запроса и ответа автоматически. Можно было использовать конечно redux-form, но тут всего одна форма, поэтому сделал проще.

Величину поля запроса можно менять мышкой (тач не работает, в задании не было), величина поля ответа "тянется" вслед за полем запроса. Размер поля сохраняется опять же в localStorage, чтобы после обновления вкладки поля оставались такими же. После logout размер поля удаляется из localStorage, т.к. я не думаю что есть смысл хранить эти данные по каждому пользователю подобно истории, а если хранить общее для всех значение то получится, что один пользователь поменял ширину поля, вышел, другой зашел в этом же браузере и получил настройки предыдущего.

### 2.3  Страница 404

В задании ее не было, но я думаю она должна быть по умолчанию. Пользователь ее видит при любом URL, отличном от '/' или '/app'. 
 
### 2.4 Страница-прелоадер

Также не было в задании. Просто показывает лоадер пока приложение смотрит есть ли юзер в localStorage, есть ли история запросов по этому юзеру, жива ли сессия.


## 3. Адаптив

Я понимаю, что в задании этого не было, но я все же не смог вписать все элементы в ширину 640, чтобы было красиво. Поэтому сделано следующее: 

- при достижении ширины и высоты равной ширине и высоте консоли, убираю кнопку "Развернуть на весь экран", т.к. смысла в ней нет, приложение и так на весь экран;

- убираю текст у кнопки "Выйти", оставляя только иконку;

- уменьшаю отступы между элементами.

## P.S.

Хочу поблагодарить за интересное тестовое задание! Я человек который очень увлечен разработкой, люблю учиться и развиваться, поэтому буду рад если пригласите побеседовать! Если нет, прошу любой обратной связи, чтобы знать куда развиваться и учиться.
