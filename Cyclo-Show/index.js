body{
    margin:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100vh;
    justify-content: center;
    background-color: black;
    overflow: hidden;
}

.image-container{
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateY(0deg);
    transition: transform .7s;
}

.image-container span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: rotateY(calc(var(--i)*45deg)) translateZ(400px);
}

.image-container span img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;

}

.btn-container{
    position: relative;
    width: 80%;
}

.btn{
    position: absolute;
    bottom: -80px;
    background-color: slateblue;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.btn:hover{
    filter: brightness(1.5);
}

#prev{
    left: 20%;
}

#next{
    right: 20%;
}
