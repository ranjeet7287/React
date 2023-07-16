// const a=function(){
//     console.log("ji");
// }
// a();
// const b=()=>{
//     console.log("ji");
// }
// b();

// console.log(this); // window

// const obj1={
//     fun:function(){
//         console.log(this); // this will refer to this object
//     },
//     fun2:()=>{
//         console.log(this); // window // this not work in arrow function
//     }
// }
// obj1.fun(); // obj
// obj1.fun2(); // window


// function x(){
// console.log(this);
//     function y(){
//         console.log(this);
//         function z(){
//             console.log(this);
//         }
//         z(); //window
//     }
//     y(); // window
// }
// x(); // window
// this doesn't depend where you are but depend apon who you call
// All three console.log(this) statements will output the window object, 
// as the functions are invoked in the global context.

// const person1={
//     name:"Ranjeet"
// }
// const person2={
//     name:"Riya"
// }
// function x(){
//     console.log(this);
// }
// x.call(this); // window
// x.call(person1); // person 1
// x.call(person2); // person 2

// the call() method allows you to invoke a function and explicitly set the value of 
// this within that function.The first parameter passed to call() represents the value that will be used as this inside the function.


// const person={
//     name:"Ranjeet",
//     print:function(){
//         console.log(this);
//     },
// }
// const person2={
//     name:"Riya",
// }
// person.print();                // person obj
// person.print.call();           // window
// person.print.call(this);       // window
// person.print.call(person2);    // riya
// person.print.call(person);     // ranjeet 

// call apply bind

// const obj={
//     firstname:"Ranjeet",
//     fun:()=>{
        // console.log(this.firstname);
//         console.log(this);
//     },
//     fun2:function(){
        // console.log(this.firstname);
//         console.log(this);
//     }
// }
// obj.fun();   // undefined    // window 
// obj.fun2();  // Ranjeet     // object
// obj.fun.call()             // window
// obj.fun2.call()           // window

/*
    Interviews

    Luck ❤️ 
    Companies don't train their interviwers well
    A person can be a good Software Engineer but not be a good Interviwer.

    Our Preparation 
       - techinal (Codeing Skill and Projects).
            Come from Practice lot of code and makeing good project.
       - Power of Expression [Not able express our point].
                Read Documentation (Content)
                Try Expalin whenever you code do interosception.
       - Explain Your Code while Writeing.
                Expalin along with the code not after first write you code then expalin this is a 
                wrong way.

                Expalin while writeing every stay in flow and give some resons behind every step
                of your code.
                
                Practice Mock Interview
       
        - Prepration on the interview day
            - Relax 
            - What can happen you not able to cleared just calm and learn where you did the mistake 
              and keep improving your skills that matter a lot if you have confidence in our skill
              you will definately select some their are so many companies don't attached to companies 
              attached to our skill.
            
            
            - pen/paper
            - water bottle
            - charged you laptop
            - make sure good internet and good quality microphone.
            - keep your camera on 
            - always think interviwer as your friend ask question completely you should be clear
             question  and always connected to interviwer through the question.
*/