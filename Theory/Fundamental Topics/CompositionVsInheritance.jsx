// Composition vs Inheritance

// - Не злоупотребляйте наследованием
// - Композиция может быть легче и удобнее
// - React даёт предпочтение использованию композиций над иерархическим наследованием компонентов


// Композиция
function Composition(props) {
    return (
        <div>
            <Component>
                ЗДЕСЬ БУДЕТ ВСЕ ДЕТИ КОМПОНЕНТА КОТОРЫЕ БУДУТ ПЕРЕДАВАТЬСЯ ВМЕСТЕ С НИМ
                {props.children}
            </Component>
        </div>
    );
}




// Наследование
// Нужно прописывать своеобразный кeducer 
// Поэтому сразу к черту такое разбрасывание строками кода
class AnotherChild extends AnotherParent {
    render() {
        let text = 'Я другой компонент, переписываю родительский';
        if (this.props.reducer) {
            text = this.reducer(text);
        }
        return super.render(text);
    }
}