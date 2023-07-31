import HeaderComponents from "../Header"
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server"
test("Logo Should load on rendring header",()=>{    
    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <HeaderComponents/>
            </Provider>
        </StaticRouter>

    );

    // Ckeck if logo is loaded 
    const logo=header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummyLogo.png");
})
test("Online-Status Should load on rendring header",()=>{    
    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <HeaderComponents/>
            </Provider>
        </StaticRouter>

    );

    const  OnlineStatus=header.getByTestId("online-status");
    expect(OnlineStatus.innerHTML).toBe('🟢')
})
test("Caert Should load have 0 items on rendring header",()=>{    
    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <HeaderComponents/>
            </Provider>
        </StaticRouter>

    );
    const cartItem=header.getByTestId("cart-item");
    expect(cartItem.innerHTML).toBe("0_Cart");
})