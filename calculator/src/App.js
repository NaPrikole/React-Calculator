import React from 'react';
import './App.css';

const ButtonReset = (props) => {
    return(
        <button className="col-3 btn btn-default reset button-setting" onClick={props.reset}>
            C
        </button>
    );
};

const ButtonRemove = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={props.remove}>
            <i className="fa fa-long-arrow-alt-left"></i>
        </button>
    );
};

const ButtonChangeSign = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={props.changeSign}>
            +/-
        </button>
    );
};

const ButtonDot = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={props.dot}>
            .
        </button>
    );
};

const Button0 = (props) => {
    return(
        <button className="col-6 btn btn-default button-setting zero" onClick={() => props.display0(0)}>
            0
        </button>
    );
};

const Button1 = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.display1(1)}>
            1
        </button>
    );
};

const Button2 = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.display2(2)}>
            2
        </button>
    );
};

const Button3 = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.display3(3)}>
            3
        </button>
    );
};

const Button4 = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.display4(4)}>
            4
        </button>
    );
};

const Button5 = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.display5(5)}>
            5
        </button>
    );
};

const Button6 = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.display6(6)}>
            6
        </button>
    );
};

const Button7 = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.display7(7)}>
            7
        </button>
    );
};

const Button8 = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.display8(8)}>
            8
        </button>
    );
};

const Button9 = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.display9(9)}>
            9
        </button>
    );
};

const ButtonDiv = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.getResult('/')}>
            /
        </button>
    );
};

const ButtonMult = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.getResult('*')}>
            *
        </button>
    );
};

const ButtonMinus = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.getResult('-')}>
            -
        </button>
    );
};

const ButtonPlus = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.getResult('+')}>
            +
        </button>
    );
};

const ButtonEqual = (props) => {
    return(
        <button className="col-3 btn btn-default button-setting" onClick={() => props.getResult('=')}>
            =
        </button>
    );
};

class Calculator extends React.Component {
    state = {
        display: '0',
        operandOne: false,
        operator: null,
        value: null,
    };

    resetButton = () => {
        this.setState({
            display: '0',
            operandOne: false,
            operator: null,
            value: null,
        })
    };

    displayButton = (button) => {

        //const strLength = /^[а-я\w]{4,12}$/i
        this.state.operandOne
            ?
            this.setState({
                display: button.toString(),
                operandOne: false,
            })
            :
            this.setState({
                display: this.state.display === '0' ? button.toString() : this.state.display + button
            })

        if(this.state.display.lengtn === 12) {return;}
    };

    changeSign = () => {
        this.setState({
            display: this.state.display.charAt(0) === '-' ? this.state.display.substr(1) : '-' + this.state.display
        })
    };

    dot = () => {
        if(this.state.operandOne){
            this.setState({
                display: '.',
                operandOne: false,
            })
        }
        else if(this.state.display.indexOf('.') === -1){
            this.setState({
                display: this.state.display + '.'
            })
        }
    };

    getResult = (chainOperator) =>{

        const mathOperations = {
            '/': (prevValue, nextValue) => prevValue / nextValue,
            '*': (prevValue, nextValue) => prevValue * nextValue,
            '-': (prevValue, nextValue) => prevValue - nextValue,
            '+': (prevValue, nextValue) => prevValue + nextValue,
            '=': (prevValue, nextValue) => nextValue
        }
        const nextValue = parseFloat(this.state.display)


        if(this.state.value == null){
            this.setState({
                value: nextValue
            })
        } else if(this.state.operator){
            const valueAtTheMoment = this.state.value || 0
            const getResult = mathOperations[this.state.operator](valueAtTheMoment, nextValue)

            this.setState({
                value: getResult,
                display: String(getResult)
            })
        }

        this.setState({
            operandOne: true,
            operator: chainOperator,
        })
    };

    remove = () => {
        if(this.state.display.length === 1) {return;}
        this.setState({
            display: this.state.display.slice(0, -1)
        })
    }

    render(){
        return(
            <div className="container text-center">
                <h1 className="title">Calculator</h1>
                <div className="calculator-skin">
                    <div className="calculator-display">{this.state.display}</div>
                    <div className="container calculator-keyboard">
                        <ButtonReset reset={this.resetButton} />
                        <ButtonRemove remove={this.remove}/>
                        <ButtonChangeSign changeSign={this.changeSign}/>
                        <ButtonDiv getResult={this.getResult}/>
                        <Button7 display7={this.displayButton} />
                        <Button8 display8={this.displayButton} />
                        <Button9 display9={this.displayButton} />
                        <ButtonMult getResult={this.getResult}/>
                        <Button4 display4={this.displayButton} />
                        <Button5 display5={this.displayButton} />
                        <Button6 display6={this.displayButton} />
                        <ButtonMinus getResult={this.getResult}/>
                        <Button1 display1={this.displayButton} />
                        <Button2 display2={this.displayButton} />
                        <Button3 display3={this.displayButton} />
                        <ButtonPlus getResult={this.getResult}/>
                        <div className="last-row">
                            <Button0 display0={this.displayButton} />
                            <ButtonDot dot={this.dot}/>
                            <ButtonEqual getResult={this.getResult}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render(){
        return(
            <Calculator />
        );
    }
}

export default App;
