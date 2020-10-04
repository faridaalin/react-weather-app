import React from 'react'
import GlobalStyle from "../style/base/globalStyles";
import Theme from "../style/theme/theme";
import {
    Container,
    SearchField
} from "../style/container";



export default function SearchBox({ message, handleKeypress }) {
    return (
        <div>
            <GlobalStyle />
            <Theme>
                <Container>
                    <SearchField
                        placeholder="Search by city"
                        type="search"
                        onKeyPress={handleKeypress}
                    />
                    <div>{message ? message : null}</div>
                </Container>
            </Theme>
        </div>
    )
}
