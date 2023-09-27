import styled from "styled-components";


export const FooterStyles = styled.footer`
    background: #100B20;
    .one{
        display: flex;
    }
    a{
        width: fit-content;
    }
    .xx{
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .two{
        margin-top: 4rem;
        position: relative;
    }
    .two p{
        text-align: center;
    }
    .list{
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    .f1{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .f2{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .inner{
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    .inner .socials{
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .below, .f3{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .b-1{
        display: flex;
        gap: 0.75rem;
        svg{
            margin-top: 4px;
        }
    }
    .x p{
        margin-top: 1rem;
    }
    .one{
        gap: 1rem;
    }
    .f23{
        display: flex;
        gap: 4rem;
    }
    .locatn{
        width: 60%;
    }
    .follow{
        white-space: nowrap;
    }
    .purple-1{
        top: -200%;
        left: 50%;
    }
    .f3, .f2{
        position: relative;
    }
    .white-1{
        left: 5%;
    }
    .white-2{
        top: 50%;
        left: 70%;
    }
    .grey-1{
        left: 80%;
        top: 10%;
    }
    @media (max-width: 998px) {
        padding: 6rem 3rem 3rem 6rem;
        .one, .f23{
            flex-direction: column;
        }
        .two{
            margin-top: 3rem;
        }
        .xx{
            margin-top: 3rem;
        }
        .f23{
            gap: 3rem;
        }
        .below, .f3{
            gap: 0.75rem;
        }
        .purple-1{
            top: -120%;
            left: 50%;
        }
        .white-1{
            left: 5%;
            top: 50%;
        }
        .grey-1{
            left: 40%;
            top:  50%;
        }
    }
    @media (max-width: 500px){
        padding: 3rem 1.5rem 1.5rem 3rem;
        .two{
            margin-top: 1.5rem;
        }
        .f23{
        flex-drection: column;
        }
        .xx{
            margin-top: 2rem;
        }
        .white-1{
            left: 5%;
            top: 30%;
        }
    }
    @media (min-width: 998px){
        padding: 8rem 8rem;
        padding-left: 10rem;
        padding-bottom: 4rem;
        .x p{
            width: 95%;
            margin-top: 1rem;
        }
        .one{
            gap: 1rem;
        }
        .f23{
            width: 50%;
            display: flex;
            gap: 4rem;
        }
        .f1{
            width: 50%;
        }
        
        .f2, .f3{
            margin-top: 0.75rem;
        }
    }
`