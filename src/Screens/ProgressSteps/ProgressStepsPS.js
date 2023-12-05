import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  Image,
} from 'react-native';
import PhoneInput, {isValidNumber} from 'react-native-phone-number-input';
import {Checkbox, RadioButton} from 'react-native-paper';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import AnimatedLottieView from 'lottie-react-native';

const MyProgressStepsComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState(false);
  // Step 1
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formatNumber, setFormatNumber] = useState('');
  // Step 2
  const [agree, setAgree] = useState('');
  const [agreeState, setAgreeState] = useState(false);
  const [checkboxArray, setCheckboxArray] = useState([]);
  // Step 3
  const [selectedCourse, setSelectedCourse] = useState('');
  // Final Data
  const [data, setData] = useState([]);

  // Step 1
  const phone = useRef(null);

  const myFunc = () => {
    const valid = isValidNumber(formatNumber);
    console.log(valid);
    if (valid) {
      //when we use '?.' together it means when the value is empty or null it will not through an error or crash Application.
      let num = phone.current?.getNumberAfterPossiblyEliminatingZero();
      num = num.formattedNumber;
      setPhoneNumber(num);
    }
  };

  // Step 2
  const educationalQualifications = [
    {id: 1, label: 'Matriculation'},
    {id: 2, label: 'Intermediate'},
    {id: 3, label: 'Bachelor'},
    {id: 4, label: 'Master'},
  ];

  const handleItemToggle = value => {
    if (checkboxArray.includes(value)) {
      setCheckboxArray(prevArray => prevArray.filter(item => item !== value));
    } else {
      setCheckboxArray(prevArray => [...prevArray, value]);
    }
  };

  console.log('checkbox array: ', checkboxArray);

  // Step 3
  const courses = [
    {id: 1, value: 'Mobile App Development'},
    {id: 2, value: ' Website Development'},
    {id: 3, value: 'UI/UX Designing'},
  ];
  const imageshow = () => {
    if (selectedCourse == 1) {
      return require('../../Assets/Skills/mobile-app-development.png');
    } else if (selectedCourse == 2) {
      return require('../../Assets/Skills/website-development.png');
    } else if (selectedCourse == 3) {
      return require('../../Assets/Skills/ui-ux-designing.png');
    }
  };

  useEffect(() => {
    const showButtons = Keyboard.addListener('keyboardDidShow', () => {
      setButtonsVisible(true);
    });
    const hideButtons = Keyboard.addListener('keyboardDidHide', () => {
      setButtonsVisible(false);
    });
    return () => {
      showButtons.remove();
      hideButtons.remove();
    };
  }, []);

  function doValidationFirstStep() {
    setIsValid(false);
    let num = parseInt(age);
    if (
      name == '' ||
      num === 0 ||
      num < 18 ||
      num > 99 ||
      phoneNumber == '' ||
      address == ''
    ) {
      setErrors(true);
    } else {
      setIsValid(true);
      setErrors(false);
      return true;
    }
  }

  function doValidationSecondStep() {
    setIsValid(false);
    const selectObj = Object.values(checkboxArray);
    const obj = selectObj?.filter(item => {
      return item == 'Matriculation';
    });
    const objSecond = selectObj?.filter(item => {
      return item == 'Intermediate';
    });
    if (obj.length === 0 || objSecond.length === 0 || agreeState == false) {
      setErrors(true);
    } else {
      setIsValid(true);
      setErrors(false);
      return true;
    }
  }

  function doValidationThirdStep() {
    setIsValid(false);
    if (selectedCourse == '') {
      setErrors(true);
    } else {
      setIsValid(true);
      setErrors(false);
      return true;
    }
  }

  function addData(requestBy) {
    let finalData = {};
    let req = requestBy;
    if (req == 1 && doValidationFirstStep()) {
      console.log('validation success - Step 1');
    } else if (req == 2 && doValidationSecondStep()) {
      console.log('validation success - Step 2');
    } else if (req == 3 && doValidationThirdStep()) {
      console.log('validation success - Step 3');
    } else {
      // setData({
      //   name: name,
      //   age: age,
      //   address: address,
      //   phoneNumber: phoneNumber,
      //   checkboxArray: checkboxArray,
      //   agree: agree,
      //   selectedCourse: selectedCourse,
      // });
      finalData = {
        name: name,
        age: age,
        address: address,
        phoneNumber: phoneNumber,
        checkboxArray: checkboxArray,
        agreeState: agreeState,
        selectedCourse: selectedCourse,
      };
      console.log('All Data : ', finalData);
    }
  }

  const onNextStep1 = () => {
    let requestBy = 1;
    myFunc();
    addData(requestBy);
  };
  const onNextStep2 = () => {
    let requestBy = 2;
    addData(requestBy);
  };
  const onNextStep3 = () => {
    let requestBy = 3;
    addData(requestBy);
  };
  const onSubmit = () => {
    let requestBy = 4;
    console.log('Done');
  };
  const onPrevStep = () => {
    console.log('Switched to previous step');
  };
  const nextButtonTextStyle = {
    color: 'white',
    fontFamily: 'OpenSans_Condensed-Bold',
    // fontWeight: '600',
    lineHeight: 21,
    // backgroundColor: 'red',
  };
  const prevButtonTextStyle = {
    color: '#00b4fc',
    fontFamily: 'OpenSans_Condensed-Bold',
    // fontWeight: '600',
    lineHeight: 21,
  };

  return (
    <View style={styles.mainContainer}>
      <ProgressSteps
        activeStep={activeStep}
        activeStepIconColor="#70d9ff"
        activeStepIconBorderColor="#00b4fc"
        disabledStepIconColor="gray"
        completedStepIconColor="#00b4fc"
        completedCheckColor="white"
        activeStepNumColor="white"
        disabledStepNumColor="white"
        progressBarColor="gray"
        completedProgressBarColor="#00b4fc"
        completedLabelColor="#00b4fc"
        labelFontFamily="OpenSans_Condensed-Bold"
        labelFontSize={18}
        activeLabelColor={'#00b4fc'}
        labelColor="gray"
        marginBottom={50}
        topOffset={20}>
        <ProgressStep
          nextBtnStyle={styles.nextBtn}
          nextBtnTextStyle={nextButtonTextStyle}
          nextBtnText={'Next'}
          label="Personal"
          onNext={() => onNextStep1()}
          errors={errors}
          removeBtnRow={buttonsVisible}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.mainHeading}>Personal Details Form</Text>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Name</Text>
              <TextInput
                style={styles.txtInput}
                placeholder="Enter your name"
                keyboardType="default"
                value={name}
                onChangeText={txt => setName(txt)}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Age</Text>
              <TextInput
                style={styles.txtInput}
                placeholder="Enter your age"
                keyboardType="number-pad"
                value={age}
                onChangeText={txt => setAge(txt)}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Phone Number</Text>
              <PhoneInput
                ref={phone}
                defaultCode="PK"
                // autoFocus
                layout="first"
                withDarkTheme
                withShadow
                defaultValue={formatNumber}
                value={formatNumber}
                onChangeFormattedText={text => setFormatNumber(text)}
                textInputProps={{
                  placeholder: 'Enter your phone number',
                }}
                containerStyle={styles.inputFlagContainer}
                textContainerStyle={styles.inputContainer}
                codeTextStyle={styles.inputContainerContent}
                textInputStyle={styles.inputContainer2}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Address</Text>
              <TextInput
                style={styles.txtInput}
                placeholder="Enter your address"
                keyboardType="default"
                value={address}
                onChangeText={txt => setAddress(txt)}
              />
            </View>
          </SafeAreaView>
        </ProgressStep>

        <ProgressStep
          nextBtnStyle={styles.nextBtn}
          nextBtnTextStyle={nextButtonTextStyle}
          previousBtnStyle={styles.previousBtn}
          previousBtnTextStyle={prevButtonTextStyle}
          errors={errors}
          label="Education"
          onNext={() => onNextStep2()}
          onPrevious={() => onPrevStep()}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.mainHeading}>Educational Details Form</Text>
            <View style={styles.checkboxParentContainer}>
              {educationalQualifications.map(item => (
                <View style={styles.checkboxContainer} key={item.id}>
                  <Checkbox
                    // status={
                    //   checkedItems.includes(item.id) ? 'checked' : 'unchecked'
                    status={
                      checkboxArray.includes(item.label)
                        ? 'checked'
                        : 'unchecked'
                    }
                    onPress={() => handleItemToggle(item.label)}
                    // disabled={item.id === 3} // Example: Disable the third item
                  />
                  <Text style={styles.label}>{item.label}</Text>
                </View>
              ))}
            </View>
            <View style={styles.radioView}>
              <RadioButton
                color="black"
                value={agree}
                status={agreeState ? 'checked' : 'unchecked'}
                onPress={() => {
                  setAgreeState(!agreeState);
                  agreeState ? setAgree('Agree') : setAgree('');
                  console.log('Selected Value: ', agree);
                }}
              />
              <Text style={{fontSize: 16}}>
                I agree the above information is correct.
              </Text>
            </View>
          </SafeAreaView>
        </ProgressStep>

        <ProgressStep
          nextBtnStyle={styles.nextBtn}
          nextBtnTextStyle={nextButtonTextStyle}
          previousBtnStyle={styles.previousBtn}
          previousBtnTextStyle={prevButtonTextStyle}
          label="Courses"
          onNext={() => onNextStep3()}
          onPrevious={() => onPrevStep()}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.mainHeading}>Select course</Text>
            {courses.map(course => {
              return (
                <View key={course.id} style={styles.radioViewStep3}>
                  <RadioButton
                    value={course.id}
                    color="#00b4fc"
                    status={
                      selectedCourse === course.id ? 'checked' : 'unchecked'
                    }
                    onPress={() => setSelectedCourse(course.id)}
                  />
                  <Text style={{fontSize: 26, marginLeft: 10}}>
                    {course.value}
                  </Text>
                </View>
              );
            })}

            {selectedCourse && (
              <Image
                resizeMode="stretch"
                style={{
                  height: 220,
                  width: '100%',
                  backgroundColor: '#00b4fc',
                  borderRadius: 15,
                  marginTop: 40,
                }}
                source={imageshow()}
                // source={
                //   selectedCourse == 1
                //     ? require('../../Assets/Skills/mobile-app-development.png')
                //     : selectedCourse == 2
                //     ? require('../../Assets/Skills/website-development.png')
                //     : selectedCourse == 3
                //     ? require('../../Assets/Skills/ui-ux-designing.png')
                //     : null
                // }
              />
            )}
          </SafeAreaView>
        </ProgressStep>

        <ProgressStep
          nextBtnStyle={styles.nextBtn}
          nextBtnTextStyle={nextButtonTextStyle}
          previousBtnStyle={styles.previousBtn}
          previousBtnTextStyle={prevButtonTextStyle}
          label="Certification"
          onPrevious={() => onPrevStep()}
          onSubmit={() => onSubmit()}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.mainHeading}>Certification Eligibility</Text>
            {agreeState ? (
              <>
                <AnimatedLottieView
                  style={styles.lottie}
                  autoPlay
                  loop
                  source={require('../../Assets/SuccessFailure/Animation - 1699880198554.json')}
                />
                <Text
                  style={[
                    {
                      ...styles.certificationTxt,
                      backgroundColor: '#00b4fc',
                    },
                  ]}>
                  You will get an e-Certificate
                </Text>
              </>
            ) : (
              <>
                <AnimatedLottieView
                  style={styles.lottie}
                  autoPlay
                  loop
                  source={require('../../Assets/SuccessFailure/Animation - 1699880279517.json')}
                />
                <Text
                  style={[
                    {...styles.certificationTxt, backgroundColor: 'red'},
                  ]}>
                  You will not get an e-Certificate
                </Text>
              </>
            )}
          </SafeAreaView>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  mainContainer: {flex: 1, backgroundColor: '#b1e1e9', padding: 10},
  mainHeading: {
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
    elevation: 10,
    shadowColor: '#00b4fc',
    fontFamily: 'PlaypenSans-Bold',
    paddingHorizontal: 20,
    borderRadius: 10,
    color: '#00b4fc',
    backgroundColor: 'white',
  },
  nextBtn: {
    elevation: 15,
    alignItems: 'center',
    backgroundColor: '#00b4fc',
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    marginRight: -50,
    top: 20,
    width: 100,
  },
  previousBtn: {
    elevation: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 35,
    justifyContent: 'center',
    marginLeft: -50,
    top: 20,
    width: 100,
  },
  // submitBtn: {
  //   elevation: 10,
  //   backgroundColor: '#00b4fc',
  //   width: '100%',
  //   borderRadius: 10,
  // },
  // submitBtnText: {
  //   color: 'white',
  //   marginHorizontal: 30,
  //   FontFamily: 'OpenSans_SemiCondensed-LightItalic',
  // },

  // Step 1
  inputView: {marginTop: 20, width: '100%'},
  inputText: {
    color: 'black',
    marginBottom: 5,
    fontSize: 20,
    fontFamily: 'OpenSans_Condensed-Medium',
  },
  txtInput: {
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  inputFlagContainer: {
    width: '100%',
    height: 50,
    borderRadius: 10,
  },
  inputContainer: {
    // backgroundColor: 'teal',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 50,
  },
  inputContainerContent: {
    fontStyle: 'italic',
    height: 50,
    paddingTop: 12,
    // backgroundColor: 'red',
  },
  inputContainer2: {
    // backgroundColor: 'red',
    height: 50,
    paddingTop: 10,
  },

  // Step 2
  checkboxParentContainer: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 30,
    // justifyContent: 'flex-start',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  label: {
    fontSize: 30,
    marginLeft: 20,
  },
  radioView: {
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginTop: 10,
  },

  // Step 3
  radioViewStep3: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 40,
  },

  // Step 4
  lottie: {
    height: 250,
    width: 250,
    // backgroundColor: 'red',
    marginVertical: 30,
  },
  certificationTxt: {
    fontSize: 22,
    color: 'white',
    width: '70%',
    borderRadius: 50,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 25,
    fontFamily: 'OpenSans_Condensed-ExtraBoldItalic',
  },
});

export default MyProgressStepsComponent;
