import { getPage } from "../../shared/lib/index.js";
import { Button } from "../../shared/ui/button/index.js";
import { Input } from "../../shared/ui/input/index.js"

export default () => {
    const TestButton = false
    const TestInput = false
    return getPage({
        title: "Главная",
        body: `
            <h1>Главная</h1>
            ${Button({
            label: "Тест",
            extraAttrs: {
                "data-js-require": true,
                "id": "btn"
            },
            extraClasses: {
                isHidden: true,
                isDisabled: TestButton,
            }
        })}
            ${Input({
            label: "Тестовый инпут",
            extraAttrs: {
                "data-js-require": true,
                "id": "inp",
                "name": "test",
                "type": "number"
            },
            extraClasses: {
                isHidden: true,
                isDisabled: TestInput,
            }
        })}
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/about.html">О Нас</a>
                    </li>
                </ul>
            </nav>
        `
    })
}