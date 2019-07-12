class Animal {
    constructor(name,color){
        this.name=name;
        this.color=color;
    }

    toString(){
        console.log('name:'+this.name+',color:'+this.color);
    }
}
let animal=new Animal("dog",'white');
animal.toString();
//export{name,color}导出变量
//import{age,name} from 'test' 导入变量

