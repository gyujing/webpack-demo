import count from "./js/count";
import sum from "./js/sum";
// 想要webpack打包资源，必须引入
import "./css/index.css"
import "./less/index.less"
import "./sass/index.sass"
import "./sass/index.scss"

console.log(count(2, 2));
console.log(sum(1, 2, 3, 4));
