
$('#tblRemarksList').on("click", "[id *= iAddRemarks_]", function () {

    var ind = $(this).closest('tr').find('[id*=iAddRemarks_]').attr('id').split("_")[1];

        var Client = $('#Concrete_Specimen_Dtl_List_' + ind + '__Client').val();
        var Id_Mark = $('#Concrete_Specimen_Dtl_List_' + ind + '__Id_Mark').val();
        var DimensionL = $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_L').val();
        var DimensionB = $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_B').val();
        var DimensionH = $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_H').val();
        var Date_Of_Casting = $('#Concrete_Specimen_Dtl_List_' + ind + '__Date_Of_Casting').val();
        var Age_Test = $('#Concrete_Specimen_Dtl_List_' + ind + '__Age_Test').val();
        var GRADE_ID = $('#Concrete_Specimen_Dtl_List_' + ind + '__GRADE_ID').val();
        var Weight = $('#Concrete_Specimen_Dtl_List_' + ind + '__Weight').val();
        var Crushing_Load = $('#Concrete_Specimen_Dtl_List_' + ind + '__Crushing_Load').val();
        var Compressive_Strength = $('#Concrete_Specimen_Dtl_List_' + ind + '__Compressive_Strength').val();
        var AVG_Compressive_Strength = $('#Concrete_Specimen_Dtl_List_' + ind + '__AVG_Compressive_Strength').val();
        var Remarks = $('#Concrete_Specimen_Dtl_List_' + ind + '__Remarks').val();

        //var Test_Dtl_ID = $('#Concrete_Specimen_Dtl_List_' + ind + '__Test_Dtl_ID').val();
    
        //var FLAG = $('#Concrete_Specimen_Dtl_List_' + ind + '__FLAG').val();



        var errCnt = 0;
        if (Client == '') {
            $('#spnErr_txtClient_' + ind).text('Insert Client').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtClient_' + ind).text('').hide();
        }

        if (Id_Mark == '') {
            $('#spnErr_txtId_Mark_' + ind).text('Insert Mark ID').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtId_Mark_' + ind).text('').hide();
        }

        if (DimensionL == '') {
            $('#spnErr_txtDimensionL_' + ind).text('Insert Dimension L').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtDimensionL_' + ind).text('').hide();
        }

        if (DimensionB == '') {
            $('#spnErr_txtDimensionB_' + ind).text('Insert Dimension B').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtDimensionB_' + ind).text('').hide();
        }

        if (DimensionH == '') {
            $('#spnErr_txtDimensionH_' + ind).text('Insert Dimension H').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtDimensionH_' + ind).text('').hide();
        }

        if (Date_Of_Casting == '') {
            $('#spnErr_txtDate_Of_Casting_' + ind).text('Insert Casting Date').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtDate_Of_Casting_' + ind).text('').hide();
        }

        if (Age_Test == '' || Age_Test == 0) {
            $('#spnErr_txtAge_Test_' + ind).text('Insert Test Age').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtAge_Test_' + ind).text('').hide();
        }

        if (GRADE_ID == '') {
            $('#spnErr_txtGRADE_ID_' + ind).text('Insert Concrete Grade').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtGRADE_ID_' + ind).text('').hide();
        }
        if (Weight == '') {
            $('#spnErr_txtWeight_' + ind).text('Insert Weight').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtWeight_' + ind).text('').hide();
        }
        if (Crushing_Load == '') {
            $('#spnErr_txtCrushing_Load_' + ind).text('Insert Crushing Load').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtCrushing_Load_' + ind).text('').hide();
        }
        if (Compressive_Strength == '') {
            $('#spnErr_txtCompressive_Strength_' + ind).text('Insert Compressive Strength').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtCompressive_Strength_' + ind).text('').hide();
        }
        if (AVG_Compressive_Strength == '') {
            $('#spnErr_txtAVG_Compressive_Strength_' + ind).text('Insert Average Compressive Strength').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtAVG_Compressive_Strength_' + ind).text('').hide();
        }

        if (Remarks == '') {
            $('#spnErr_txtRemarks_' + ind).text('Insert  Remarks').show();
            errCnt = errCnt + 1;

        }
        else {
            $('#spnErr_txtRemarks_' + ind).text('').hide();
        }

        if (errCnt == 0) {
        
            CreateRemarks_List(Client, Id_Mark, DimensionL, DimensionB, DimensionH, Date_Of_Casting, Age_Test, GRADE_ID, Weight, Crushing_Load, Compressive_Strength,
               AVG_Compressive_Strength, Remarks,Test_Dtl_ID,FLAG);
            //$('#Concrete_Specimen_Dtl_List_' + ind + '__FLAG').val('A');
            //$('#Concrete_Specimen_Dtl_List_' + ind + '__FLAG').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__Client').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__Id_Mark').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_L').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_B').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_H').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__Date_Of_Casting').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__Age_Test').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__GRADE_ID').val('').change;
            $('#Concrete_Specimen_Dtl_List_' + ind + '__Weight').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__Crushing_Load').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__Compressive_Strength').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__AVG_Compressive_Strength').val('');
            $('#Concrete_Specimen_Dtl_List_' + ind + '__Remarks').val('');
            //$('#Concrete_Specimen_Dtl_List_' + ind + '__Test_Dtl_ID').val('');
        }
});

//var CreateRemarks_List = function (Client, Id_Mark, DimensionL, DimensionB, DimensionH, Date_Of_Casting, Age_Test, GRADE_ID, Weight, Crushing_Load, Compressive_Strength,
//           AVG_Compressive_Strength, Remarks, Test_Dtl_ID, FLAG) {
var CreateRemarks_List = function (Client, Id_Mark, DimensionL, DimensionB, DimensionH, Date_Of_Casting, Age_Test, GRADE_ID, Weight, Crushing_Load, Compressive_Strength,
           AVG_Compressive_Strength, Remarks) {


    var i = $('#tbodyRemarksList [id*=iDelRemarks_]').length;


    var selectGrade = $('#tbodyRemarksList [id*=Concrete_Specimen_Dtl_List_0__GRADE_ID]');
    var body = '';

    body += '<tr>';

        body += '<td data-title="Sr. No." style="text-align: center; padding-top: 17px;">';
        body += '<span id="spnSrNo_' + i + '" >' + parseInt(i + 1) + '</span>';
        body += '</td>';

        body += '<td data-title="Client">';
        body += '<input class="form-control" id="Concrete_Specimen_Dtl_List_' + i + '__Client" maxlength="12" name="Concrete_Specimen_Dtl_List[' + i + '].Client" type="text" value="' + Client + '">'
        body += '</td>';

        body += '<td data-title="Id Mark" >';
        body += '<input autocomplete="off" class="form-control" id="Concrete_Specimen_Dtl_List_' + i + '__Id_Mark" maxlength="250" name="Concrete_Specimen_Dtl_List[' + i + '].Id_Mark" type="text" value="' + Id_Mark + '">'
        body += '</td>';

        body += '<td data-title="DimensionL">';
        body += '<input autocomplete="off" class="form-control" id="Concrete_Specimen_Dtl_List_' + i + '__Dimension_L" maxlength="250" name="Concrete_Specimen_Dtl_List[' + i + '].Dimension_L" type="text" value="' + DimensionL + '">'
        body += '</td>';

        body += '<td data-title="DimensionB">';
        body += '<input autocomplete="off" class="form-control" id="Concrete_Specimen_Dtl_List_' + i + '__Dimension_B" maxlength="250" name="Concrete_Specimen_Dtl_List[' + i + '].Dimension_B" type="text" value="' + DimensionB + '">'
        body += '</td>';

        body += '<td data-title="DimensionH">';
        body += '<input autocomplete="off" class="form-control" id="Concrete_Specimen_Dtl_List_' + i + '__Dimension_H" maxlength="250" name="Concrete_Specimen_Dtl_List[' + i + '].Dimension_H" type="text" value="' + DimensionH + '">'
        body += '</td>';

        body += '<td data-title="Date Of Casting">';
        body += '<input autocomplete="off" class="form-control datetimepicker" id="Concrete_Specimen_Dtl_List_' + i + '__Date_Of_Casting" readonly="True" name="Concrete_Specimen_Dtl_List[' + i + '].Date_Of_Casting" type="text" value="' + Date_Of_Casting + '">'
        body += '</td>';

        body += '<td data-title="Age Test">';
        body += '<input autocomplete="off" class="form-control" id="Concrete_Specimen_Dtl_List_' + i + '__Age_Test" maxlength="250" name="Concrete_Specimen_Dtl_List[' + i + '].Age_Test" type="text" value="' + Age_Test + '">'
        body += '</td>';

        body += '<td data-title="Concrete Grade">';
        body += '<select class="form-control" data-placeholder="Select Grade" id="Concrete_Specimen_Dtl_List_' + i + '__GRADE_ID" name="Concrete_Specimen_Dtl_List[' + i + '].GRADE_ID" style="width:100%">';
        body += selectGrade.html();
        body += '<span id="spnErr_ddlGrade_' + i + '" class="field-validation-error"></span>';
        body += '</select>';
        body += '</td>';

        body += '<td data-title="Weight">';
        body += '<input autocomplete="off" class="form-control" id="Concrete_Specimen_Dtl_List_' + i + '__Weight" maxlength="250" name="Concrete_Specimen_Dtl_List[' + i + '].Weight" type="text" value="' + Weight + '">'
        body += '</td>';

        body += '<td data-title="Crushing_Load">';
        body += '<input autocomplete="off" class="form-control" id="Concrete_Specimen_Dtl_List_' + i + '__Crushing_Load" maxlength="250" name="Concrete_Specimen_Dtl_List[' + i + '].Crushing_Load" type="text" value="' + Crushing_Load + '">'
        body += '</td>';

        body += '<td data-title="Compressive Strength">';
        body += '<input autocomplete="off" class="form-control" id="Concrete_Specimen_Dtl_List_' + i + '__Compressive_Strength" maxlength="250" name="Concrete_Specimen_Dtl_List[' + i + '].Compressive_Strength" type="text" value="' + Compressive_Strength + '">'
        body += '</td>';

        body += '<td data-title="Average Compressive Strength">';
        body += '<input autocomplete="off" class="form-control" id="Concrete_Specimen_Dtl_List_' + i + '__AVG_Compressive_Strength" maxlength="250" name="Concrete_Specimen_Dtl_List[' + i + '].AVG_Compressive_Strength" type="text" value="' + AVG_Compressive_Strength + '">'
        body += '</td>';

        body += '<td data-title="Remarks">';
        body += '<input autocomplete="off" class="form-control" id="Concrete_Specimen_Dtl_List_' + i + '__Remarks" maxlength="250" name="Concrete_Specimen_Dtl_List[' + i + '].Remarks" type="text" value="' + Remarks + '">'
        body += '</td>';



        body += '<td data-title="Action" style="font-size:20px;padding-top:17px;">';
        if (i == 0) {
            body += '<i class="fa fa-plus" aria-hidden="true" style="cursor:pointer;display:block;" id="iAddRemarks_' + i + '"></i>';
            body += '<i class="fa fa-close" aria-hidden="true" style="cursor:pointer;display:none;color:red;" id="iDelRemarks_' + i + '"></i>';
        }
        else {
            body += '<i class="fa fa-plus" aria-hidden="true" style="cursor:pointer;display:none;" id="iAddRemarks_' + i + '"></i>';
            body += '<i class="fa fa-close" aria-hidden="true" style="cursor:pointer;display:block;color:red;" id="iDelRemarks_' + i + '"></i>';
        }

        body += '</td>';
        body += '</tr>';

        $('#tbodyRemarksList').append(body);

        $('#Concrete_Specimen_Dtl_List_' + i + '__GRADE_ID').select2().val(GRADE_ID).change();
        $('#Concrete_Specimen_Dtl_List_' + i + '__Date_Of_Casting').datepicker({ language: 'en', autoClose: true, dateFormat: 'dd MM yyyy', });
    //}
}


$('#tbodyRemarksList').on("click", "[id*=iDelRemarks_]", function () {
    alert("HII");
    var ind = $(this).closest('tr').find('[id*=iDelRemarks_]').attr('id').split("_")[1];
    $(this).closest('tr').remove();

    var len = $('[id*=iDelRemarks_]').length;
    for (x = 0; x < len; x++) {
        if (x >= parseInt(ind)) {

            //$('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__FLAG').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__FLAG').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].FLAG');

            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Client').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Client').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Client');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Id_Mark').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Id_Mark').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Id_Mark');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Dimension_L').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Dimension_L').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Dimension_L');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Dimension_B').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Dimension_B').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Dimension_B');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Dimension_H').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Dimension_H').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Dimension_H');

            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Date_Of_Casting').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Date_Of_Casting').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Date_Of_Casting');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Age_Test').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Age_Test').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Age_Test');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__GRADE_ID').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__GRADE_ID').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].GRADE_ID');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Weight').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Weight').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Weight');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Crushing_Load').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Crushing_Load').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Crushing_Load');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Compressive_Strength').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Compressive_Strength').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Compressive_Strength');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__AVG_Compressive_Strength').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__AVG_Compressive_Strength').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].AVG_Compressive_Strength');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Remarks').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Remarks').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Remarks');
          
  
            $('#iAddRemarks_' + (x + 1)).attr('id', 'iAdd_' + x);
            $('#iDelRemarks_' + (x + 1)).attr('id', 'iDel_' + x);
            //$('#iEditRemarks_' + (x + 1)).attr('id', 'iEDIT_' + x);
        }
    }

});





function ValidateTable() {
    var errCnt = 0;
    var rowsCount = $('#tblList [id*=iDel_]').length;
    if (rowsCount == 1) {

        $('#tblRemarksList [id *= iDelRemarks_]').each(function () {

            //var FLAG = $('#hdnFLAG').val();


            var ind = $(this).closest('tr').find('[id*=iDelRemarks_]').attr('id').split("_")[1];
            var FLAG = $('#Concrete_Specimen_Dtl_List_' + ind + '__FLAG').val("A");
            //var SrNo = $('#Concrete_Specimen_Dtl_List_' + ind + '__SrNo').val();
            var Client = $('#Concrete_Specimen_Dtl_List_' + ind + '__Client').val();
            var Id_Mark = $('#Concrete_Specimen_Dtl_List_' + ind + '__Id_Mark').val();
            var DimensionL = $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_L').val();
            var DimensionB = $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_B').val();
            var DimensionH = $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_H').val();
            var Date_Of_Casting = $('#Concrete_Specimen_Dtl_List_' + ind + '__Date_Of_Casting').val();
            var Age_Test = $('#Concrete_Specimen_Dtl_List_' + ind + '__Age_Test').val();
            var GRADE_ID = $('#Concrete_Specimen_Dtl_List_' + ind + '__GRADE_ID').val();
            var Weight = $('#Concrete_Specimen_Dtl_List_' + ind + '__Weight').val();
            var Crushing_Load = $('#Concrete_Specimen_Dtl_List_' + ind + '__Crushing_Load').val();
            var Compressive_Strength = $('#Concrete_Specimen_Dtl_List_' + ind + '__Compressive_Strength').val();
            var AVG_Compressive_Strength = $('#Concrete_Specimen_Dtl_List_' + ind + '__AVG_Compressive_Strength').val();
            var Remarks = $('#Concrete_Specimen_Dtl_List_' + ind + '__Remarks').val();
        
            if (Client == '') {
                $('#spnErr_txtClient_' + ind).text('Insert Client').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtClient_' + ind).text('').hide();
            }

            if (Id_Mark == '') {
                $('#spnErr_txtId_Mark_' + ind).text('Insert Mark ID').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtId_Mark_' + ind).text('').hide();
            }

            if (DimensionL == '') {
                $('#spnErr_txtDimensionL_' + ind).text('Insert Dimension L').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtDimensionL_' + ind).text('').hide();
            }

            if (DimensionB == '') {
                $('#spnErr_txtDimensionB_' + ind).text('Insert Dimension B').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtDimensionB_' + ind).text('').hide();
            }

            if (DimensionH == '') {
                $('#spnErr_txtDimensionH_' + ind).text('Insert Dimension H').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtDimensionH_' + ind).text('').hide();
            }

            if (Date_Of_Casting == '') {
                $('#spnErr_txtDate_Of_Casting_' + ind).text('Insert Casting Date').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtDate_Of_Casting_' + ind).text('').hide();
            }

            if (Age_Test == '' || Age_Test == 0) {
                $('#spnErr_txtAge_Test_' + ind).text('Insert Test Age').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtAge_Test_' + ind).text('').hide();
            }

            if (GRADE_ID == '') {
                $('#spnErr_txtGRADE_ID_' + ind).text('Insert Concrete Grade').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtGRADE_ID_' + ind).text('').hide();
            }
            if (Weight == '') {
                $('#spnErr_txtWeight_' + ind).text('Insert Weight').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtWeight_' + ind).text('').hide();
            }
            if (Crushing_Load == '') {
                $('#spnErr_txtCrushing_Load_' + ind).text('Insert Crushing Load').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtCrushing_Load_' + ind).text('').hide();
            }
            if (Compressive_Strength == '') {
                $('#spnErr_txtCompressive_Strength_' + ind).text('Insert Compressive Strength').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtCompressive_Strength_' + ind).text('').hide();
            }
            if (AVG_Compressive_Strength == '') {
                $('#spnErr_txtAVG_Compressive_Strength_' + ind).text('Insert Average Compressive Strength').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtAVG_Compressive_Strength_' + ind).text('').hide();
            }

            if (Remarks == '') {
                $('#spnErr_txtRemarks_' + ind).text('Insert  Remarks').show();
                errCnt = errCnt + 1;

            }
            else {
                $('#spnErr_txtRemarks_' + ind).text('').hide();
            }


        });

    }
    else {
        $('#tblRemarksList [id *= iDelRemarks_]').each(function () {
            var ind = $(this).closest('tr').find('[id*=iDelRemarks_]').attr('id').split("_")[1];

            //var SrNo = $('#Concrete_Specimen_Dtl_List_' + ind + '__SrNo').val();
            var FLAG = $('#Concrete_Specimen_Dtl_List_' + ind + '__FLAG').val("A");
            var Client = $('#Concrete_Specimen_Dtl_List_' + ind + '__Client').val();
            var Id_Mark = $('#Concrete_Specimen_Dtl_List_' + ind + '__Id_Mark').val();
            var DimensionL = $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_L').val();
            var DimensionB = $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_B').val();
            var DimensionH = $('#Concrete_Specimen_Dtl_List_' + ind + '__Dimension_H').val();
            var Date_Of_Casting = $('#Concrete_Specimen_Dtl_List_' + ind + '__Date_Of_Casting').val();
            var Age_Test = $('#Concrete_Specimen_Dtl_List_' + ind + '__Age_Test').val();
            var GRADE_ID = $('#Concrete_Specimen_Dtl_List_' + ind + '__GRADE_ID').val();
            var Weight = $('#Concrete_Specimen_Dtl_List_' + ind + '__Weight').val();
            var Crushing_Load = $('#Concrete_Specimen_Dtl_List_' + ind + '__Crushing_Load').val();
            var Compressive_Strength = $('#Concrete_Specimen_Dtl_List_' + ind + '__Compressive_Strength').val();
            var AVG_Compressive_Strength = $('#Concrete_Specimen_Dtl_List_' + ind + '__AVG_Compressive_Strength').val();
            var Remarks = $('#Concrete_Specimen_Dtl_List_' + ind + '__Remarks').val();
         
            if (Client != '' || Id_Mark != '' || Dimension != '' || Date_Of_Casting != '' || Age_Test != '' || GRADE_ID != '' || Weight != '' ||
                Crushing_Load != '' || Compressive_Strength != '' || AVG_Compressive_Strength != '' || Remarks != '') {
                if (Client == '') {
                    $('#spnErr_txtClient_' + ind).text('Insert Client').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtClient_' + ind).text('').hide();
                }

                if (Id_Mark == '') {
                    $('#spnErr_txtId_Mark_' + ind).text('Insert Mark ID').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtId_Mark_' + ind).text('').hide();
                }

                if (DimensionL == '') {
                    $('#spnErr_txtDimensionL_' + ind).text('Insert Dimension L').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtDimensionL_' + ind).text('').hide();
                }

                if (DimensionB == '') {
                    $('#spnErr_txtDimensionB_' + ind).text('Insert Dimension B').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtDimensionB_' + ind).text('').hide();
                }

                if (DimensionH == '') {
                    $('#spnErr_txtDimensionH_' + ind).text('Insert Dimension H').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtDimensionH_' + ind).text('').hide();
                }

                if (Date_Of_Casting == '') {
                    $('#spnErr_txtDate_Of_Casting_' + ind).text('Insert Casting Date').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtDate_Of_Casting_' + ind).text('').hide();
                }

                if (Age_Test == '' || Age_Test == 0) {
                    $('#spnErr_txtAge_Test_' + ind).text('Insert Test Age').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtAge_Test_' + ind).text('').hide();
                }

                if (GRADE_ID == '') {
                    $('#spnErr_txtGRADE_ID_' + ind).text('Insert Concrete Grade').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtGRADE_ID_' + ind).text('').hide();
                }
                if (Weight == '') {
                    $('#spnErr_txtWeight_' + ind).text('Insert Weight').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtWeight_' + ind).text('').hide();
                }
                if (Crushing_Load == '') {
                    $('#spnErr_txtCrushing_Load_' + ind).text('Insert Crushing Load').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtCrushing_Load_' + ind).text('').hide();
                }
                if (Compressive_Strength == '') {
                    $('#spnErr_txtCompressive_Strength_' + ind).text('Insert Compressive Strength').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtCompressive_Strength_' + ind).text('').hide();
                }
                if (AVG_Compressive_Strength == '') {
                    $('#spnErr_txtAVG_Compressive_Strength_' + ind).text('Insert Average Compressive Strength').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtAVG_Compressive_Strength_' + ind).text('').hide();
                }

                if (Remarks == '') {
                    $('#spnErr_txtRemarks_' + ind).text('Insert  Remarks').show();
                    errCnt = errCnt + 1;

                }
                else {
                    $('#spnErr_txtRemarks_' + ind).text('').hide();
                }
            }
        });

    }
    return errCnt;
}





$('#tbodyRemarksList').on("click", "[id*=iEditRemarks_]", function () {
    alert("HII");
    var ind = $(this).closest('tr').find('[id*=iEditRemarks_]').attr('id').split("_")[1];
    $(this).closest('tr').remove();

    var len = $('[id*=iEditRemarks_]').length;
    for (x = 0; x < len; x++) {
        if (x >= parseInt(ind)) {

            //$('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__FLAG').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__FLAG').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].FLAG');

            //$('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__SrNo').attr('id', 'Product_Dtl_' + x + '__SrNo').attr('name', 'Concrete_Specimen_Dtl_List_[' + x + '].SrNo');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Client').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Client').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Client');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Id_Mark').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Id_Mark').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Id_Mark');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Dimension_L').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Dimension_L').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Dimension_L');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Dimension_B').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Dimension_B').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Dimension_B');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Dimension_H').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Dimension_H').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Dimension_H');

            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Date_Of_Casting').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Date_Of_Casting').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Date_Of_Casting');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Age_Test').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Age_Test').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Age_Test');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__GRADE_ID').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__GRADE_ID').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].GRADE_ID');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Weight').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Weight').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Weight');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Crushing_Load').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Crushing_Load').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Crushing_Load');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Compressive_Strength').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Compressive_Strength').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Compressive_Strength');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__AVG_Compressive_Strength').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__AVG_Compressive_Strength').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].AVG_Compressive_Strength');
            $('#Concrete_Specimen_Dtl_List_' + (x + 1) + '__Remarks').attr('id', 'Concrete_Specimen_Dtl_List_' + x + '__Remarks').attr('name', 'Concrete_Specimen_Dtl_List[' + x + '].Remarks');

            //$('#spnSrNo_' + (x + 1)).attr('id', 'spnSrNo_' + x).text(x + 1);
            $('#iAddRemarks_' + (x + 1)).attr('id', 'iAdd_' + x);
            $('#iDelRemarks_' + (x + 1)).attr('id', 'iDel_' + x);
            $('#iEditRemarks_' + (x + 1)).attr('id', 'iEDIT_' + x);
        }
    }

});


