import Body from "../Body";
import { render, waitFor ,fireEvent, getByAltText } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { RestaurantData } from "../../mocks/data";
import "@testing-library/jest-dom";

globalThis.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{ 
            return Promise.resolve(RestaurantData)
        }
    });
});

test("Shimmer should load on Result Page",()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    const shimmer =body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(10);
    console.log(shimmer);
});

test("Resturant  should load on Result Page",async()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(()=>expect(body.getByTestId("search-btn")))

    const resList =body.getByTestId("res-list");

    expect(resList.children.length).toBe(20);

    // console.log(shimmer);
});


test("Search for string(food) should load on Result Page",async()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(()=>expect(body.getByTestId("search-btn")))

    const input=body.getByTestId("search-input");

    fireEvent.change(input,{
        target:{
            value:"Burger"
        }
    })

    const searchBtn=body.getByTestId("search-btn");

    fireEvent.click(searchBtn);

    const resList =body.getByTestId("res-list");
    expect(resList.children.length).toBe(3);

    // console.log(shimmer);
});