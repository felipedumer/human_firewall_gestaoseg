import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {Button, ButtonContainer} from '../components/QuizButton';

const questions = [
  {
    question:
      'Quais técnicas os criminosos utilizam para invadir documentos e roubar dados?',
    answers: [
      {id: '1', text: 'Venda de carros'},
      {id: '2', text: 'Pishing e engenharia social', correct: true},
      {id: '3', text: 'Cópia da assinatura'},
      {id: '4', text: 'Técnica A51'},
    ],
  },
  {
    question: 'Como um criminoso obtém o acesso remoto a um dispositivo?',
    answers: [
      {id: '1', text: 'Adobe Photoshop Legalizado'},
      {id: '2', text: 'Microsoft Windows Original'},
      {id: '3', text: 'Antivírus'},
      {id: '4', text: 'Office pirata (software malicioso)', correct: true},
    ],
  },
  {
    question: 'Como evitar que vírus e malware contaminem um dispositivo?',
    answers: [
      {id: '1', text: 'Morar perto da delegacia virtual'},
      {id: '2', text: 'Não usar pendrives'},
      {id: '3', text: 'Utilizar Antivírus', correct: true},
      {id: '4', text: 'Não acessar a internet'},
    ],
  },
  {
    question: 'Selecione a senha considerada segura.',
    answers: [
      {id: '1', text: '123'},
      {id: '2', text: 'abcdef123'},
      {id: '3', text: 'EL*@#1S$GINF!!20211eaD', correct: true},
      {id: '4', text: '123456'},
    ],
  },
  {
    question: 'Qual é a única diretriz que a LGPD NÃO estabelece?',
    answers: [
      {id: '1', text: 'coleta'},
      {id: '2', text: 'processamento'},
      {id: '3', text: 'armazenamento'},
      {id: '4', text: 'desligamento', correct: true},
    ],
  },
  {
    question:
      'O Marco Civil da Internet (Lei 12.965/2014) foi sancionado em 2014 e regula os direitos e deveres das redes sociais.',
    answers: [
      {id: '1', text: 'Verdade', correct: true},
      {id: '2', text: 'Mentira'},
      {id: '3', text: 'Fake news'},
      {id: '4', text: 'Fake!'},
    ],
  },
];

const QuizScreen = () => {
  const [quizState, setQuizState] = useState({
    correctCount: 0,
    totalCount: questions.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    done: false,
  });

  const onPerguntaSelect = answer => {
    let isRightAnswer = 0;
    if (answer.correct) {
      isRightAnswer = 1;
    }

    setQuizState({
      ...quizState,
      correctCount: quizState.correctCount + isRightAnswer,
      activeQuestionIndex: quizState.activeQuestionIndex + 1,
      done: quizState.activeQuestionIndex + 1 >= quizState.totalCount,
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safearea}>
        <View>
          {quizState.done ? (
            <View>
              <Text style={styles.text}>
                Você concluiu o quiz com uma porcentagem de acerto de:
              </Text>
              <Text style={styles.bigText}>
                {(
                  (quizState.correctCount / quizState.totalCount) *
                  100
                ).toFixed(0)}
                %
              </Text>
              {quizState.correctCount / quizState.totalCount < 0.6 ? (
                <Text style={styles.text}>
                  Isso significa que você ainda pode melhorar seus
                  conhecimentos, tente novamente!
                </Text>
              ) : (
                <Text style={styles.text}>
                  Parabéns! Você conseguiu uma pontuação satisfatória no Quiz.
                </Text>
              )}
            </View>
          ) : (
            <View>
              <Text style={styles.text}>
                {questions[quizState.activeQuestionIndex].question}
              </Text>
              <ButtonContainer>
                {questions[quizState.activeQuestionIndex].answers.map(
                  answer => (
                    <Button
                      key={answer.id}
                      text={answer.text}
                      onPress={() => onPerguntaSelect(answer)}
                    />
                  ),
                )}
              </ButtonContainer>
            </View>
          )}
        </View>
        <Text style={styles.text}>
          {`${quizState.activeQuestionIndex}/${questions.length}`}
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212431',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  bigText: {
    color: '#fff',
    fontSize: 75,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
});
