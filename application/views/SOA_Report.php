	<?php
	header('Content-type: application/excel');
	$filename = 'AdjustmentReport-'. date('mdY') .'.xls';
	header('Content-Disposition: attachment; filename='.$filename);
	date_default_timezone_set('Asia/Manila');
	if($records){
		foreach($records as $record){
			$Property_IDLink = $record->Property_IDLink;
			$MHOLID = $record->MHOLID;
			$name = $record->FirstName . " " . $record->MiddleName[0] . ". " . $record->LastName . " " . $record->ExtName;
			$cluster = $record->PhaseCluster;
			$lot = "Blk " . $record->BlockNo . " - Lot " . $record->LotNo;
			$annual_balance = $record->AnnualBalance;
			if($All == 'true'){
				$Month = $record->xMonth;
				$Year = $record->xYear;
			}else{
				$Month = $xMonth;
				$Year = $xYear;
			}
			break;
		}
		$balance = 0;
		$current = 0;
		$member_count = 1;
		$months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	}
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
				font-family: 'Times New Roman';
			}

			table {
				border-spacing: -1px;
				border-width:thin;
			}

			td {
				font-size: 85%;
				padding:5px;
				/* border: 1px solid black; */
			}
	
			@page { sheet-size: Letter; }
			
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
				font-size: 100%;
				text-align:center;
			}
			.half_me {
				height: 12.40cm;
			}
	
		</style>
		<body>
			<?php if($records): ?>
			<?php foreach($records as $record): ?>
			<?php if($Property_IDLink != $record->Property_IDLink): ?>
			<div class="half_me">
				<h4 style="text-align:center;"><b>PUEBLO GOLF ESTATES HOMEOWNERS ASSOCIATION, INC.</b></h4>
				<br>
				<p style="text-align:center;">CAGAYAN DE ORO CITY<br><br>Tel. No. 088-8588032 &nbsp;&nbsp;&nbsp;&nbsp; TIN:</p>
				<h4 style="text-align:center;"><b>STATEMENT OF ACCOUNT</b></h4>
				<table width="100%">
					<tr>
						<td style="width:15%;"><b>Name : </b></td>
						<td style="width:35%;"><?php echo $name; ?></td>
						<td style="width:15%;"><b>Cluster : </b></td>
						<td style="width:35%;"><?php echo $cluster; ?></td>
					</tr>
					<tr>
						<td style="width:15%;border-bottom:1px solid black;"><b>Lot : </b></td>
						<td style="width:35%;border-bottom:1px solid black;"><?php echo $lot; ?></td>
						<td style="width:15%;border-bottom:1px solid black;"><b>Month : </b></td>
						<td style="width:35%;border-bottom:1px solid black;"><?php echo $months[(int)$Month - 1] . " - " . $Year; ?></td>
					</tr>
				</table>
				<br>
				<table width="100%">
					<tr>
						<td style="width:60%;">
							<table width="100%">
								<tr>
									<td style="width:70%;"><b>CURRENT CHARGES</b></td>
									<td style="width:30%;"></td>
								</tr>
								<tr>
									<td>Association Dues</td>
									<td style="text-align:right;"><?php echo number_format((float)$current, 2, '.', ','); ?></td>
								</tr>
								<tr>
									<td><b>TOTAL CURRENT CHARGES</b></td>
									<td style="text-align:right;"><b>Php <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <?php echo number_format((float)$current, 2, '.', ','); ?></span></b></td>
								</tr>
								<tr>
									<td><b>BALANCE FROM PREVIOUS BILLING</b></td>
									<td style="text-align:right;"></td>
								</tr>
								<tr>
									<td><b>TOTAL ANNUAL BALANCE</b></td>
									<td style="text-align:right;"><b>Php <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <?php echo number_format((float)$annual_balance, 2, '.', ','); ?></span></b></td>
								</tr>
								<tr>
									<td><b>TOTAL PREVIOUS MONTHLY BALANCE</b></td>
									<td style="text-align:right;"><b>Php <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <?php echo number_format((float)$balance - $current, 2, '.', ','); ?></span></b></td>
								</tr>
								<tr>
									<td><b>TOTAL AMOUNT DUE</b></td>
									<td style="text-align:right;"><b>Php <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <?php echo number_format((float)$balance + $annual_balance, 2, '.', ','); ?></span></b></td>
								</tr>
							</table>
						</td>
						<td style="width:40%;border-left:1px solid black;">
							<table width="100%;">
								<tr>
									<td style="width:40%;">SOA No.:</td>
									<td style="width:60%;text-align:center;"><?php echo $Year . $Month . "-" . $MHOLID; ?></td>
								</tr>
								<tr>
									<td>Statement Date:</td>
									<td style="text-align:center;"><?php echo date("m/d/Y"); ?></td>
								</tr>
								<tr>
									<td>Due Date:</td>
									<td style="text-align:center;"><?php echo $duedate ? $Month . "/" . $duedate . "/" . $Year : ""; ?></td>
								</tr>
								<tr>
									<td colspan="2"><b>DISCONNECTION DATE:</b></td>
								</tr>
								<tr>
									<td colspan="2"><b><br>NOTE:</b></td>
								</tr>
								<tr>
									<td colspan="2">1. Please notify us immediately if you notice any discrepancies.<br>2. Failure to pay on or before the due date may result in disconnection of water services and surcharge of Php 500.00.<br>3. All payments made after the statement date will be reflected in your next bill. Please disregard if payments have been made.<br>4. For PACE, kindly submit BIR Form 2307 upon payment if tax is to be withheld, otherwise payments will not be accepted and will be deemed past due.</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<br>
				<br>
				<br>
				<br>
				<table width="100%">
					<tr>
						<td style="width:70%;font-size:70%;text-align:right;"><em>*** This is a computer-generated billing statement. No signature required. ***</em></td>
						<td style="width:30%;font-size:70%;text-align:right;"><em>Date Printed: <?php echo date("Y-m-d"); ?></em></td>
					</tr>
				</table>
			</div>
			<?php 
				$Property_IDLink = $record->Property_IDLink;
				$MHOLID = $record->MHOLID;
				if($All == 'true'){
					$Month = $record->xMonth;
					$Year = $record->xYear;
				}else{
					$Month = $xMonth;
					$Year = $xYear;
				}
				$name = $record->FirstName . " " . $record->MiddleName[0] . ". " . $record->LastName . " " . $record->ExtName;
				$cluster = $record->PhaseCluster;
				$lot = "Blk " . $record->BlockNo . " - Lot " . $record->LotNo;
				$annual_balance = $record->AnnualBalance;
			?>
			<?php if($member_count % 2 != 0): ?>
				<!-- <p style="border-bottom:1px dashed black;width:100%;"></p> -->
				<br>
				<br>
			<?php endif; ?>
			<?php $member_count = $member_count + 1; ?>
			<?php $balance = 0; ?>
			<?php $current = 0; ?>
			<?php endif; ?>
			<?php $balance = $balance + $record->Balance; ?>
			<?php  
				if($xMonth == $record->xMonth and $xYear == $record->xYear){
					$current = $record->Balance;
				}
			?>
			<?php endforeach; ?>
				<h4 style="text-align:center;"><b>PUEBLO GOLF ESTATES HOMEOWNERS ASSOCIATION, INC.</b></h4>
				<br>
				<p style="text-align:center;">CAGAYAN DE ORO CITY<br><br>Tel. No. 088-8588032 &nbsp;&nbsp;&nbsp;&nbsp; TIN:</p>
				<h4 style="text-align:center;"><b>STATEMENT OF ACCOUNT</b></h4>
				<table width="100%">
					<tr>
						<td style="width:15%;"><b>Name : </b></td>
						<td style="width:35%;"><?php echo $name; ?></td>
						<td style="width:15%;"><b>Cluster : </b></td>
						<td style="width:35%;"><?php echo $cluster; ?></td>
					</tr>
					<tr>
						<td style="width:15%;border-bottom:1px solid black;"><b>Lot : </b></td>
						<td style="width:35%;border-bottom:1px solid black;"><?php echo $lot; ?></td>
						<td style="width:15%;border-bottom:1px solid black;"><b>Month : </b></td>
						<td style="width:35%;border-bottom:1px solid black;"><?php echo $months[(int)$Month - 1] . " - " . $Year; ?></td>
					</tr>
				</table>
				<br>
				<table width="100%">
					<tr>
						<td style="width:60%;">
							<table width="100%">
								<tr>
									<td style="width:70%;"><b>CURRENT CHARGES</b></td>
									<td style="width:30%;"></td>
								</tr>
								<tr>
									<td>Association Dues</td>
									<td style="text-align:right;"><?php echo number_format((float)$current, 2, '.', ','); ?></td>
								</tr>
								<tr>
									<td><b>TOTAL CURRENT CHARGES</b></td>
									<td style="text-align:right;"><b>Php <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <?php echo number_format((float)$current, 2, '.', ','); ?></span></b></td>
								</tr>
								<tr>
									<td><b>BALANCE FROM PREVIOUS BILLING</b></td>
									<td style="text-align:right;"></td>
								</tr>
								<tr>
									<td><b>TOTAL ANNUAL BALANCE</b></td>
									<td style="text-align:right;"><b>Php <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <?php echo number_format((float)$annual_balance, 2, '.', ','); ?></span></b></td>
								</tr>
								<tr>
									<td><b>TOTAL PREVIOUS MONTHLY BALANCE</b></td>
									<td style="text-align:right;"><b>Php <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <?php echo number_format((float)$balance - $current, 2, '.', ','); ?></span></b></td>
								</tr>
								<tr>
									<td><b>TOTAL AMOUNT DUE</b></td>
									<td style="text-align:right;"><b>Php <span style="text-decoration:underline;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <?php echo number_format((float)$balance + $annual_balance, 2, '.', ','); ?></span></b></td>
								</tr>
							</table>
						</td>
						<td style="width:40%;border-left:1px solid black;">
							<table width="100%;">
								<tr>
									<td style="width:40%;">SOA No.:</td>
									<td style="width:60%;text-align:center;"><?php echo $Year . $Month . "-" . $MHOLID; ?></td>
								</tr>
								<tr>
									<td>Statement Date:</td>
									<td style="text-align:center;"><?php echo date("m/d/Y"); ?></td>
								</tr>
								<tr>
									<td>Due Date:</td>
									<td style="text-align:center;"><?php echo $duedate ? $Month . "/" . $duedate . "/" . $Year : ""; ?></td>
								</tr>
								<tr>
									<td colspan="2"><b>DISCONNECTION DATE:</b></td>
								</tr>
								<tr>
									<td colspan="2"><b><br>NOTE:</b></td>
								</tr>
								<tr>
									<td colspan="2">1. Please notify us immediately if you notice any discrepancies.<br>2. Failure to pay on or before the due date may result in disconnection of water services and surcharge of Php 500.00.<br>3. All payments made after the statement date will be reflected in your next bill. Please disregard if payments have been made.<br>4. For PACE, kindly submit BIR Form 2307 upon payment if tax is to be withheld, otherwise payments will not be accepted and will be deemed past due.</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<br>
				<br>
				<br>
				<br>
				<table width="100%">
					<tr>
						<td style="width:70%;font-size:70%;text-align:right;"><em>*** This is a computer-generated billing statement. No signature required. ***</em></td>
						<td style="width:30%;font-size:70%;text-align:right;"><em>Date Printed: <?php echo date("Y-m-d"); ?></em></td>
					</tr>
				</table>
				<?php if($member_count % 2 != 0): ?>
					<!-- <p style="border-bottom:1px dashed black;width:100%;"></p> -->
				<?php endif; ?>
			<?php endif; ?>
			<!-- footer -->
			<htmlpagefooter name="myFooter" class="footer" style="display:none">
				<div style="text-align: center;font-weight:bold;font-size:90%;">
					<!-- Page {PAGENO} of {nbpg} -->
				</div>
			</htmlpagefooter>
		</body>
	</html>