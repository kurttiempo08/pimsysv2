<?php
	header('Content-type: application/excel');
	$filename = 'AdjustmentReport-'. date('mdY') .'.xls';
	header('Content-Disposition: attachment; filename='.$filename);
	date_default_timezone_set('Asia/Manila');
	// $member_count = 0;
	// $thirty = 0;
	// $sixty = 0;
	// $ninety = 0;
	// $onetweny = 0;
	// $above = 0;
	//  $aimonitoring_id = $_GET['aimonitoring_id'];
	//  $recepient_name = $_GET['recepient_name'];
	 $client_name = $_GET['client_name'];
	 $client_tradename = $_GET['client_tradename'];
	 $certissuance_id = $_GET['certissuance_id'];
	 $request_type = $_GET['request_type'];
	 $client_address = $_GET['client_address'];
	 $client_BPYear = $_GET['client_BPYear'];
	 $client_dayissuance = $_GET['client_dayissuance'];
	 $client_monthissuance = $_GET['client_monthissuance'];
	 $client_yearissuance = $_GET['client_yearissuance'];
	 $client_signatory = $_GET['client_signatory'];
	 $client_designation = $_GET['client_designation'];
	 $client_designation2 = $_GET['client_designation2'];
	// $recp_contact = $_GET['recp_contact'];
	// $recp_address = $_GET['recp_address'];
	// $animal_type = $_GET['animal_type'];
	// $insemination_date = $_GET['insemination_date'];
	// $monitoring_date = $_GET['monitoring_date'];
	// $diagnosis_date = $_GET['diagnosis_date'];
	// $parturitionfrom_date = $_GET['parturitionfrom_date'];
	// $parturitionto_date = $_GET['parturitionto_date'];
	// $status = $_GET['status'];
	// $remarks = $_GET['remarks'];
	// $technician = $_GET['technician'];
	// $semensource = $_GET['semensource'];
	// $animal_code = $_GET['animal_code'];
	// $actual_date = $_GET['actual_date'];
	// $pregnancy = $_GET['pregnancy'];
	// $receivedby = $_GET['receivedby'];
	// $technician = $_GET['technician'];
	// $other_reason = $_GET['others'];
	// $pregnancy = $_GET['pregnancy'];
	



	?>
	<html xmlns:x="urn:schemas-microsoft-com:office:excel">
		<head>
		
			<!--[if gte mso 9]>
			<xml>
				<x:ExcelWorkbook>
					<x:ExcelWorksheets>
						<x:ExcelWorksheet>
							<x:Name>Sheet 1</x:Name>
							<x:WorksheetOptions>
								<x:Print>
									<x:ValidPrinterInfo/>
								</x:Print>
							</x:WorksheetOptions>
						</x:ExcelWorksheet>
					</x:ExcelWorksheets>
				</x:ExcelWorkbook>
			</xml>
			<![endif]-->
		</head>
		<style>
			body {
				font-family: 'Tahoma';
			}

			table {
				border-spacing: -1px;
				border-width:thin;
			}

			td {
				font-size: 120%;
				padding:5px;
				/* border: 1px solid black; */
			}
	
			@page { sheet-size: Letter;}
			
			@page {
				margin-top: 1cm;
				margin-bottom: 1cm;
				margin-left: 1cm;
				margin-right: 1cm;
				odd-footer-name: html_myFooter;
			}
			
			h1.bigsection {
					page-break-before: always;
					page: bigger;
			}

			.main_t td{
			}

			th {
				font-size: 80%;
				text-align:center;
				padding: 10px;
			}
	
		</style>
		<body>
		<?php //var_dump($records);?>
			<?php //if($records): ?>
			<div class="half_me">
					<table width="100%">
						<tr>
							<td style="width:100%;text-align:center;"><img src="<?php echo base_url();?>assets/images/header.png"></td>
						</tr>
					</table>
				<br><br><br><br>
				<h3 style="text-align:center;font-size:20px;"><b>PROMISSORY NOTE<br></b></h3>
				<br><br><br><br>

                <p style="text-align:justify;font-size:15px;line-height:20px;margin-left:40px;margin-right:40px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I, <b><?php echo $client_name;?></b> owner of <b><?php echo $client_tradename;?></b>
                promise to comply all the pertinent documents/requirements required by City Veterinary Meat Inspection Division upon inspection.</p>

                <p style="text-align:justify;font-size:15px;line-height:20px;margin-left:40px;margin-right:40px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Furthermore, I promise to comply and submit all the required documents/requirements
                 on or before 1 month upon issuance of this note. No compliance of the required documents means no renewal of business permit.
                </p>
                <p style="text-align:justify;font-size:15px;line-height:20px;margin-left:40px;margin-right:40px;">Given this <?php echo $client_dayissuance;?> of <?php echo $client_monthissuance;?> <?php echo $client_yearissuance;?> at the City of Cagayan de Oro.</p>
				<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
				<table>
					<tr>
						<th style="width:5%;"></th>
						<th style="width:75%;font-size:14px;text-align:left;"><u><?php echo strtoupper($client_name);?></u>
						<p style="position:absolute;margin-top:-18%;"><?php echo strtoupper($client_tradename);?> OWNER</p>
						<!-- <div class="signature"><img style="width:25%;height:20%;position:absolute;z-index: -1;margin-top:-18%;" src="<?php echo base_url();?>assets/images/signature.png"> -->
						<th style="width:20%;"></th>
					</tr>
				</table>
			</div>
            
			<!-- footer -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
			<hr>
					<h5 style="text-align:center;text-weight:normal;margin-bottom:0%;">2nd Flr, Boyscout Bldg, Hayes St, Brgy. 40</h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:0%;">Cagayan de Oro City, Philippines</h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:0%;"><u>cityveterinarycdo@gmail.com</u></h5>
					<h5 style="text-align:center;text-weight:normal;margin-top:1%;margin-bottom:0%;">857-2185/09971487356</h5>
				<div style="text-align: center;font-weight:bold;font-size:90%;">
					<!-- Page {PAGENO} of {nbpg} -->
					
				<br><br><br><br>
				</div>
			</htmlpagefooter>
		</body>
	</html>