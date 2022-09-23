import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { useContext, useState } from "react";
import AppContext from "../../context/Contex";
import { AllDataTogether } from "../../types/types";

const styles = StyleSheet.create({
  page: { backgroundColor: "white" },
  section: {
    textAlign: "center",
    margin: 30,
    display: "flex",
    width: "100vw",
    flexDirection: "column",
    gap: "15px",
    alignItems: "flex-start",
    marginLeft: "67px",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    color: "grey",
  },
  makeItFlex: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "10px",
  },
  answer: {
    color: "red",
    borderBottom: "1px solid black",
    width: "366px",
  },
  question: {
    fontWeight: 500,
  },
});
const Pdf = ({ myContext }: any) => {
  const updateContext = myContext.userDetails;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header} fixed>
            ~ Enter your personal detials ~
          </Text>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>Name:-</Text>
            <Text style={styles.answer}>
              {updateContext?.personalDetails?.details?.name}
            </Text>
          </View>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>Email:-</Text>
            <Text style={styles.answer}>
              {updateContext?.personalDetails?.details?.email}
            </Text>
          </View>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>Mobile Number:-</Text>
            <Text style={styles.answer}>
              {updateContext?.personalDetails?.details?.mobileNumber}
            </Text>
          </View>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>Date of birth:-</Text>
            <Text style={styles.answer}>
              {updateContext?.personalDetails?.details?.dob}
            </Text>
          </View>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>Gender:-</Text>
            <Text style={styles.answer}>
              {updateContext?.personalDetails?.details?.gender}
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.header} fixed>
            ~ Enter your education detials ~
          </Text>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>SSC Result:-</Text>
            <Text style={styles.answer}>
              {updateContext?.education?.details?.sscResult}
            </Text>
          </View>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>HSC Result:-</Text>
            <Text style={styles.answer}>
              {updateContext?.education?.details?.hscResult}
            </Text>
          </View>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>Univercity Name:-</Text>
            <Text style={styles.answer}>
              {updateContext?.education?.details?.univercityName}
            </Text>
          </View>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>Passing year:-</Text>
            <Text style={styles.answer}>
              {updateContext?.education?.details?.passingYear}
            </Text>
          </View>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>CGPA:-</Text>
            <Text style={styles.answer}>
              {updateContext?.education?.details?.cgpa}
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.header} fixed>
            ~ Enter your professional detials ~
          </Text>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>job title:-</Text>
            <Text style={styles.answer}>
              {updateContext?.professional?.details?.jobTitle}
            </Text>
          </View>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>job name:-</Text>
            <Text style={styles.answer}>
              {updateContext?.professional?.details?.jobName}
            </Text>
          </View>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>experiance:-</Text>
            <Text style={styles.answer}>
              {updateContext?.professional?.details?.experiance}
            </Text>
          </View>
          <View style={styles.makeItFlex}>
            <Text style={styles.question}>skills:-</Text>
            <Text style={styles.answer}>
              {updateContext?.professional?.details?.skills}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
