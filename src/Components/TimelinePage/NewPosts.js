import styled from "styled-components"

export default function NewPost({ display, setDisplay, setPosts, newPosts, countNewPosts }) {

    function insertNewPosts(){
        setPosts(newPosts)
        setDisplay("none");
    }

    return (
        <NewPosted displayed = {display} onClick = {insertNewPosts}><h2> {countNewPosts} new posts, load more!</h2></NewPosted>
    )
}

const NewPosted = styled.div`
    width: 611px;
height: 61px;
left: 241px;
margin-top: 40px;
background: #1877F2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
display: ${props => props.displayed};
h2{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;
}
`