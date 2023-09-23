import { StopwatchStyles } from "@/styles/ComponentStyles/Stopwatch"


export const Stopwatch =()=>{
    return(
        <StopwatchStyles>
            <div className="digit">
                <p>18</p>
                <span>H</span>
            </div>
            <div className="digit">
                <p>00</p>
                <span>M</span>
            </div>
            <div className="digit">
                <p>00</p>
                <span>S</span>
            </div>
        </StopwatchStyles>
    )
}