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
	 $today = date("F j, Y");
	 $ris = $_GET['ris'];
	 $responsibility_center = $_GET['responsibility_center'];
	 $center_fname = $_GET['center_fname'];
	 $purpose = $_GET['purpose'];
	 $requestedby = $_GET['requestedby'];
	 $desig1 = $_GET['desig1'];
	 $approvedby = $_GET['approvedby'];
	 $desig2 = $_GET['desig2'];
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
	$total = 0;
	



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
	
			@page { sheet-size: Legal;}
			
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
							<td style="width:20%;text-align:left;"><img style="width:25%;" src="<?php echo base_url();?>assets/images/dswd_logo.png"></td>
							<td style="width:20%;text-align:right;"><i>Appendix 63</i></td>
						</tr>
					</table>
				<h3 style="text-align:center;">Distribution List</h3><br>
				<table width="100%">
					<tr>
						<td style="width:55%;text-align:left;"><h6>Entity Name: Department of Social Welfare and Development FO - X</h6></td>
						<td style="width:45%;text-align:left;"><h6>Fund Cluster: ________________________________________________<h6></td>
					</tr>
				</table>
				<table width="100%">
					<tr>
						<td style="width:50%;text-align:left;border-left: 1px solid;border-top: 1px solid;border-right: 1px solid"><h6>Division: </h6></td>
						<td style="width:50%;text-align:left;border-left: 1px solid;border-top: 1px solid;border-right: 1px solid"><h6>Responsibility Center Code: <?php echo $responsibility_center;?><h6></td>
					</tr>
					<tr>
						<td style="width:50%;text-align:left;border-left: 1px solid;border-bottom: 1px solid;border-right: 1px solid"><h6>Office: <?php echo $center_fname;?></h6></td>
						<td style="width:50%;text-align:left;border-left: 1px solid;border-bottom: 1px solid;border-right: 1px solid"><h6>RIS No: <?php echo $ris;?><h6></td>
					</tr>
				</table>
				<table width="100%">
					<tr>
						<th style="border:1px solid;width:10%">Date</th>
						<th style="border:1px solid;width:25%">Name of Client</th>
						<th style="border:1px solid;width:25%">Item</th>
						<th style="border:1px solid;width:10%">Unit of Measurement</th>
						<th style="border:1px solid;width:10%">Quantity</th>
						<th style="border:1px solid;width:10%">Signature</th>
						<th style="border:1px solid;width:10%">Remarks</th>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
					<tr>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
						<td style="border:1px solid;padding:15px;"></td>
					</tr>
				</table><br><br>

			

				<table width="100%">
					<tr>
						<th style="font-weight:bold;width:10%;">Prepared by:</th>
						<th style="font-weight:bold;width:30%;border-bottom:1px solid;"><?php echo $requestedby; ?></th>
						<th style="font-weight:bold;width:10%;">Certified by:</th>
						<th style="font-weight:bold;width:30%;border-bottom:1px solid;"><?php echo $approvedby; ?></th>
					</tr>
					<tr>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:normal;width:30%;font-size:70%;text-align:center;"><?php echo $desig1; ?></td>
						<td style="font-weight:bold;width:10%;"></td>
						<td style="font-weight:normal;width:30%;font-size:70%;text-align:center;"><?php echo $desig2; ?></td>
					</tr>
				</table>
			
			</div>
			<!-- footer -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
				
				<h6 style="text-align:center;">Page {PAGENO} of {nbpg}</h6>
				<h6 style="text-align:left;">Generated by PIMS v1.1 (<?php echo date("m/d/Y");?>)</h6>
					
				<br><br><br><br>
				</div>
			</htmlpagefooter>
		</body>
	</html>