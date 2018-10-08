  
// Show slide function
function showSlide(id) {

	$(".slide").hide();

	$("#"+id).show();

}
function ValidateBISBAS(){
	if ($('input[name="bisbas_1"]:checked').val()!=null && $('input[name="bisbas_2"]:checked').val()!=null &&
		$('input[name="bisbas_3"]:checked').val()!=null && $('input[name="bisbas_4"]:checked').val()!=null &&
		$('input[name="bisbas_5"]:checked').val()!=null && $('input[name="bisbas_6"]:checked').val()!=null &&
		$('input[name="bisbas_7"]:checked').val()!=null && $('input[name="bisbas_8"]:checked').val()!=null &&
		$('input[name="bisbas_9"]:checked').val()!=null && $('input[name="bisbas_10"]:checked').val()!=null &&
		$('input[name="bisbas_11"]:checked').val()!=null && $('input[name="bisbas_12"]:checked').val()!=null &&
		$('input[name="bisbas_13"]:checked').val()!=null && $('input[name="bisbas_14"]:checked').val()!=null &&
		$('input[name="bisbas_15"]:checked').val()!=null && $('input[name="bisbas_16"]:checked').val()!=null &&		
		$('input[name="bisbas_17"]:checked').val()!=null && $('input[name="bisbas_18"]:checked').val()!=null &&
		$('input[name="bisbas_19"]:checked').val()!=null && $('input[name="bisbas_20"]:checked').val()!=null &&
		$('input[name="bisbas_21"]:checked').val()!=null && $('input[name="bisbas_22"]:checked').val()!=null &&
		$('input[name="bisbas_23"]:checked').val()!=null && $('input[name="bisbas_24"]:checked').val()!=null
		) {
		return true
	} else {
		alert ( "Please answer all questions." );
        return false;    
    }
}


function ValidateBFI_E() {   
    if ($('input[name="bfi_e1"]:checked').val()!=null && $('input[name="bfi_e6"]:checked').val()!=null && 
      $('input[name="bfi_e11"]:checked').val()!=null && $('input[name="bfi_e16"]:checked').val()!=null && 
      $('input[name="bfi_e21"]:checked').val()!=null && $('input[name="bfi_e26"]:checked').val()!=null && 
      $('input[name="bfi_e31"]:checked').val()!=null && $('input[name="bfi_e36"]:checked').val()!=null
        ) {
        return true;
    } else {
        alert ( "Please answer all questions." );
        return false;    
    }
}

var questionSection = {

  reactionTimeArray: [],
  responseArray: [],
  qArray: [],
  startTime: 0,
  stageInExperiment: 0,


  data: [],

  end: function() {

    data: [],
    data = {
                  mTurkID: questionSection.mTurkID,
                  gender: questionSection.gender,
                  age: questionSection.age,
                  ethnicity: questionSection.ethnicity,

                  bfi_e1: questionSection.bfi_e1,
                  bfi_e6: questionSection.bfi_e6,
                  bfi_e11: questionSection.bfi_e11,
                  bfi_e16: questionSection.bfi_e16,
                  bfi_e21: questionSection.bfi_e21,
                  bfi_e26: questionSection.bfi_e26,
                  bfi_e31: questionSection.bfi_e31,
                  bfi_e36: questionSection.bfi_e36,
                  bfi_e_total: questionSection.bfi_e_total,

                  bisbas_1: questionSection.bisbas_1,
                  bisbas_2: questionSection.bisbas_2,
                  bisbas_3: questionSection.bisbas_3,
                  bisbas_4: questionSection.bisbas_4,
                  bisbas_5: questionSection.bisbas_5,
                  bisbas_6: questionSection.bisbas_6,
                  bisbas_7: questionSection.bisbas_7,
                  bisbas_8: questionSection.bisbas_8,
                  bisbas_9: questionSection.bisbas_9,
                  bisbas_10: questionSection.bisbas_10,
                  bisbas_11: questionSection.bisbas_11,
                  bisbas_12: questionSection.bisbas_12,
                  bisbas_13: questionSection.bisbas_13,
                  bisbas_14: questionSection.bisbas_14,
                  bisbas_15: questionSection.bisbas_15,
                  bisbas_16: questionSection.bisbas_16,
                  bisbas_17: questionSection.bisbas_17,
                  bisbas_18: questionSection.bisbas_18,
                  bisbas_19: questionSection.bisbas_19,
                  bisbas_20: questionSection.bisbas_20,
                  bisbas_21: questionSection.bisbas_21,
                  bisbas_22: questionSection.bisbas_22,
                  bisbas_23: questionSection.bisbas_23,
                  bisbas_24: questionSection.bisbas_24



              };
    
    questionSection.data.push(data);
    showSlide("Thankyou");



      },




  BFI_E: function() {
    questionSection.bisbas_1 = $('input[name="bisbas_1"]:checked').val();
    questionSection.bisbas_2 = $('input[name="bisbas_2"]:checked').val();
    questionSection.bisbas_3 = $('input[name="bisbas_3"]:checked').val();
    questionSection.bisbas_4 = $('input[name="bisbas_4"]:checked').val();
    questionSection.bisbas_5 = $('input[name="bisbas_5"]:checked').val();
    questionSection.bisbas_6 = $('input[name="bisbas_6"]:checked').val();
    questionSection.bisbas_7 = $('input[name="bisbas_7"]:checked').val();
    questionSection.bisbas_8 = $('input[name="bisbas_8"]:checked').val();
    questionSection.bisbas_9 = $('input[name="bisbas_9"]:checked').val();
    questionSection.bisbas_10 = $('input[name="bisbas_10"]:checked').val();
    questionSection.bisbas_11 = $('input[name="bisbas_11"]:checked').val();
    questionSection.bisbas_12 = $('input[name="bisbas_12"]:checked').val();
    questionSection.bisbas_13 = $('input[name="bisbas_13"]:checked').val();
    questionSection.bisbas_14 = $('input[name="bisbas_14"]:checked').val();
    questionSection.bisbas_15 = $('input[name="bisbas_15"]:checked').val();
    questionSection.bisbas_16 = $('input[name="bisbas_16"]:checked').val();
    questionSection.bisbas_17 = $('input[name="bisbas_17"]:checked').val();
    questionSection.bisbas_18 = $('input[name="bisbas_18"]:checked').val();
    questionSection.bisbas_19 = $('input[name="bisbas_19"]:checked').val();
    questionSection.bisbas_20 = $('input[name="bisbas_20"]:checked').val();
    questionSection.bisbas_21 = $('input[name="bisbas_21"]:checked').val();
    questionSection.bisbas_22 = $('input[name="bisbas_22"]:checked').val();
    questionSection.bisbas_23 = $('input[name="bisbas_23"]:checked').val();
    questionSection.bisbas_24 = $('input[name="bisbas_24"]:checked').val();

    questionSection.erq_r_total = +questionSection.erq_r1 + +questionSection.erq_r3 + +questionSection.erq_r5 + +questionSection.erq_r7 + +questionSection.erq_r8  + +questionSection.erq_r10;
    questionSection.erq_r_total = questionSection.erq_r_total+'';
    questionSection.erq_s_total = +questionSection.erq_s2 + +questionSection.erq_s4 + +questionSection.erq_s6 + +questionSection.erq_s9;
    questionSection.erq_s_total = questionSection.erq_s_total+'';

    showSlide("BFI_E");
      },

  Complete: function() {
    questionSection.bfi_e1 = $('input[name="bfi_e1"]:checked').val();
    questionSection.bfi_e6 = $('input[name="bfi_e6"]:checked').val();
    questionSection.bfi_e11 = $('input[name="bfi_e11"]:checked').val();
    questionSection.bfi_e16 = $('input[name="bfi_e16"]:checked').val();
    questionSection.bfi_e21 = $('input[name="bfi_e21"]:checked').val();
    questionSection.bfi_e26 = $('input[name="bfi_e26"]:checked').val();
    questionSection.bfi_e31 = $('input[name="bfi_e31"]:checked').val();
    questionSection.bfi_e36 = $('input[name="bfi_e36"]:checked').val();
    questionSection.bfi_e_total = +questionSection.bfi_e1 + +questionSection.bfi_e6 + +questionSection.bfi_e11 + +questionSection.bfi_e16 + +questionSection.bfi_e21 + +questionSection.bfi_e26 + +questionSection.bfi_e31 + +questionSection.bfi_e36;
    questionSection.bfi_e_total = questionSection.bfi_e_total+'';
    showSlide("Complete");
      },




}

showSlide("start")
