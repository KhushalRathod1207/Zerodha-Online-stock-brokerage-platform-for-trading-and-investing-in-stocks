import Signup from '../components/Signup/Signup';
import Investment from '../components/Signup/Investment';
import StepsOpenAcoount from '../components/Signup/StepsOpenAcoount';
import AccountTypes from '../components/Signup/AccountTypes';
import FAQs from '../components/FAQs';

function Signupage() {
    return (
        <>
            <Signup />
            <Investment />
            <StepsOpenAcoount />
            <AccountTypes />
            <FAQs />
        </>
    );
}

export default Signupage;
